import cryptoJs from "crypto-js";
import { isNumber } from "util";
import { Env, ISites } from "../../lib/sg-resource";
import { DES_PSD_KEY, LOGIN_INFO, PATTERN_REG } from "./constants";

declare var PUBLIC_PATH: string;
declare var SITE_INFO: string;

export default class Common {
  static Wi: number[] = [
    7,
    9,
    10,
    5,
    8,
    4,
    2,
    1,
    6,
    3,
    7,
    9,
    10,
    5,
    8,
    4,
    2,
    1,
  ]; // 加权因子
  static ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X
  /**
   * 得到编译期环境变量的配置
   */
  static getPublicPath() {
    return PUBLIC_PATH;
  }

  static getSiteInfo(): ISites {
    const siteInfo: any = SITE_INFO;
    const o: any = {};
    o[Env.DEV] = siteInfo.DEV;
    o[Env.TEST] = siteInfo.TEST;
    o[Env.UAT] = siteInfo.UAT;
    o[Env.MASTER] = siteInfo.MASTER;
    return o;
  }

  /**
   * 是否有样式名
   * @param el Dom对象
   * @param className 样式名
   */
  static hasClass(el: Element, className: any) {
    const reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
    return reg.test(el.className);
  }
  /**
   * 添加class
   * @param el Dom对象
   * @param className 样式名
   */
  static addClass(el: Element | HTMLElement | null, className: any) {
    if (el == null || this.hasClass(el, className)) {
      return;
    }
    const newClass = el.className.split(" ");
    newClass.push(className);
    el.className = newClass.join(" ");
  }
  /**
   * 删除class
   * @param el Dom对象
   * @param className 样式名
   */
  static removeClass(el: Element | null, className: string) {
    if (el == null || !this.hasClass(el, className)) {
      return;
    }
    const newClass = el.className.split(" ");
    newClass.indexOf(className);
    newClass.splice(newClass.indexOf(className), 1);
    el.className = newClass.join(" ");
  }
  /**
   * @description: 手机格式校验
   * @param {type} 11位手机号
   * @return
   */
  static isValidateMobile(value: string = "") {
    if (value.match(PATTERN_REG.mobile) !== null) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 判断身份证号码为18位时最后的验证位是否正确
   * @param idCard 身份证号码数组
   * @return
   */
  // tslint:disable-next-line:ban-types
  static isTrueValidateCodeBy18IdCard(idCard: string[]) {
    let sum = 0; // 声明加权求和变量
    if (idCard[17].toLowerCase() === "x") {
      idCard[17] = "10"; // 将最后位为x的验证码替换为10方便后续操作
    }
    for (let n = 0; n < 17; n++) {
      sum += this.Wi[n] * +idCard[n]; // 加权求和
    }
    const valCodePosition = sum % 11; // 得到验证码所位置
    if (+idCard[17] === this.ValideCode[valCodePosition]) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 倒计时
   * @param element dom
   * @param params
   * @param callback
   */
  static resend(
    element: HTMLElement,
    params: {
      num?: number;
      text?: string;
      bgColor?: string;
      borderColor?: string;
      style?: string;
    },
    callback?: any,
  ) {
    let num = params.num || 60;
    const text = params.text || "获取验证码";

    if (
      element &&
      element.nodeName === "SPAN" &&
      (element as any).parentElement.nodeName === "BUTTON"
    ) {
      element = element.parentElement as HTMLElement;
    }
    const timer = setInterval(() => {
      num--;
      element.innerHTML = num + "秒后重新获取";
      if (params.style) {
        element.style.cssText = params.style;
      }
      if (num === 0) {
        element.style.cssText = "";
        element.innerHTML = text;
        clearInterval(timer);
        callback();
      }
    }, 1000);
    return timer;
  }

  /**
   * crypto-js des 加密算法
   * @param message 需加密内容
   * @param key 加密密钥
   */
  static encryptDes(message: string, key = DES_PSD_KEY) {
    const keyHex = cryptoJs.enc.Utf8.parse(key);
    const option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 };
    const encrypted = cryptoJs.DES.encrypt(message, keyHex, option);
    return encrypted.ciphertext.toString().toUpperCase();
  }
  /**
   * crypto-js des 解密算法
   * @param message 加密文
   * @param key 加密密钥
   */
  static decryptByDes(message: string, key = DES_PSD_KEY) {
    if (!!!message) {
      return "";
    }
    const keyHex = cryptoJs.enc.Utf8.parse(key);

    const option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 };

    const encryptedHexStr = cryptoJs.enc.Hex.parse(message);
    const srcs = cryptoJs.enc.Base64.stringify(encryptedHexStr);
    const decrypted = cryptoJs.DES.decrypt(
      srcs,
      // message,
      keyHex,
      option,
    );
    return decrypted.toString(cryptoJs.enc.Utf8);
  }

  /**
   * 加密隐藏敏感信息
   * 按照“前三后三”展示原则，不足6位的“前一”展示
   * @param info 加密内容
   * @param icon *
   * @param empty -
   */
  static hideSensitive(info: number | string, icon = "*", empty = "-") {
    if (!!!info) {
      return empty;
    }
    if (isNumber(info)) {
      info = "" + info;
    }
    const len = info.length;
    if (len < 6) {
      const list = info.split("");
      list.shift();
      return info.slice(0, 1) + list.map((str) => icon).join("");
    }
    const l = info.slice(3, -3).split("");

    return info.slice(0, 3) + l.map((str) => icon).join("") + info.slice(-3);
  }

  /**
   * 函数防抖
   * 当初发时间时，设定时间内未再次触发时间，事件执行一次，如果设定时间内又触发一次，重新开始延时设定时间
   * @param handle 事件名
   *  @param time 延迟时间，单位ms
   * @param immediate 是否默认执行一次(第一次不延迟)
   */
  static debounce(
    handle: (...args: any[]) => void,
    time: number = 1000,
    immediate: boolean = false,
  ): () => void {
    let timer: any = null;
    return (...args: any) => {
      if (immediate) {
        handle.apply(this, args);
        immediate = false;
        return;
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        handle.apply(this, args);
      }, time);
    };
  }
}
