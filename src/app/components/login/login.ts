import { ElForm } from "element-ui/types/form";
import { Component, Prop, Provide, Vue, Watch } from "vue-property-decorator";
import { LoginInfo } from "../../../app/core/domain/loginInfo";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import Common from "../../core/common";
import { PATTERN_REG } from "../../core/constants";
import { SystemService } from "../../core/services/system.serv";

interface ILoginPage {
  /**
   * 登录框显示
   */
  showLogin: boolean;
  /**
   * 登录类型 per个人 org单位社团
   */
  loginType: string;
  /**
   * 个人登录form
   */
  perLoginForm: LoginInfo;
  /**
   * 单位登录form
   */
  orgLoginForm: LoginInfo;
  /**
   * 个人登录方式 0密码1短信
   */
  perLoginType: number;
  /**
   * 倒计时中
   */
  countDown: boolean;
}

@Component({
  components: {},
})
export default class LoginComp extends Vue implements ILoginPage {
  @AutowiredService
  systemService: SystemService;
  showLogin: boolean = false;
  loginType: string = "per";
  perLoginForm: LoginInfo = new LoginInfo();
  orgLoginForm: LoginInfo = new LoginInfo();
  perLoginType: number = 0;
  timer: any;
  countDown: boolean = false;
  debounceUse: any = Common.debounce(this.sendMsg, 500);
  rules: any = {
    learningName: [
      { required: true, message: "请输入新学名", trigger: "change" },
    ],
    password: [{ validator: this.isPawAvailable, trigger: "change" }],
    phoneNumber: [{ validator: this.validateMobile, trigger: "change" }],
    verifyCode: [
      { required: true, message: "请输入验证码", trigger: "change" },
    ],
  };

  get allowSendMsgPer() {
    return (
      Common.isValidateMobile(this.perLoginForm.phoneNumber) && !this.countDown
    );
  }

  /**
   * 密码正则校验
   * @param rule
   * @param phone
   * @param callback
   */
  isPawAvailable(rule: any, password: any, callback: any) {
    const myreg = PATTERN_REG.password;
    if (!password) {
      // 8-20位大小写字母和数字组合密码
      callback(new Error("请输入密码"));
    }
    if (!myreg.test(password)) {
      callback(new Error("8-20位、大小写字母+数据组合"));
    } else {
      callback();
    }
  }

  /**
   * 手机号校验
   * @param rule
   * @param value
   * @param callback
   */
  validateMobile(rule: any, value: string, callback: any) {
    if (value) {
      if (Common.isValidateMobile(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的手机号"));
      }
    } else {
      callback(new Error("请输入手机号"));
    }
  }

  /**
   * 发送验证码
   */
  async sendMsg(e: any) {
    try {
      this.countDown = true;
      this.timer = Common.resend(e.target, { num: 5 }, () => {
        this.countDown = false;
      });
    } catch (error) {
      //
    }
  }

  /**
   * 登录
   * @param type 登录类型
   */
  async submitForm(type: string) {
    try {
      await (this.$refs[type] as ElForm).validate();
      const res = await this.systemService.loginDo(this.perLoginForm);
      console.log("success");
    } catch (error) {
      // this.$message.error("请完善信息");
    }
  }

  /* 生命钩子 START */
  mounted() {
    clearInterval(this.timer);
  }
}
