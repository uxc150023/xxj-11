import { ElForm } from "element-ui/types/form";
import {
  Component,
  Inject,
  Prop,
  Provide,
  Vue,
  Watch,
} from "vue-property-decorator";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import { ComBaseComp } from "../../core/ComBaseComp";
import Common from "../../core/common";
import { PATTERN_REG } from "../../core/constants";
import { BaseInfo } from "../../core/domain/BaseInfo";
import { SystemService } from "../../core/services/system.serv";

@Component({
  components: {},
})
export default class LoginComp extends ComBaseComp {
  @AutowiredService
  systemService: SystemService;
  loginType: string = "1";
  autoLogin: boolean = false;
  pictureVisiable: boolean = false;
  ruleSmsCode: string = "";
  pictureUrl: string = "";
  perLoginForm: BaseInfo = new BaseInfo();
  orgLoginForm: BaseInfo = new BaseInfo();
  perLoginType: number = 0;
  timer: any;
  countDown: boolean = false;
  debounceUse: any = Common.debounce(this.sendMsg, 500);
  showLogin: boolean = false;
  rules: any = {
    learningName: [
      { required: true, message: "请输入新学名", trigger: "change" },
    ],
    password: [{ validator: this.isPawAvailable, trigger: "change" }],
    // phoneNumber: [{ validator: this.validateMobile, trigger: "change" }],
    phoneNumber: [
      { required: true, message: "请输入注册手机/新学名", trigger: "change" },
    ],
    verifyCode: [
      { required: true, message: "请输入验证码", trigger: "change" },
    ],
  };

  @Inject("reload") reload: any;

  get allowSendMsgPer() {
    return (
      Common.isValidateMobile(this.perLoginForm.phoneNumber) && !this.countDown
    );
  }

  get msgBtn() {
    return this.$refs.msgBtn as HTMLButtonElement;
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
  async sendMsg(e: any, isReplace: boolean = false) {
    try {
      this.countDown = true;
      this.perLoginForm.sendType = 3;
      const res = await this.systemService.getVerificationCode(
        this.perLoginForm,
      );
      this.perLoginForm.verifyCode = res;
      // 频繁操作
      // if (res) {
      //   if (!isReplace && this.pictureVisiable) {
      //     this.$message.error("请输入图片验证码对应的字母");
      //   }
      //   this.pictureVisiable = true;
      //   this.pictureUrl = "data:image/jpeg;base64," + res.pictureTokenImage;
      // } else {
      this.timer = Common.resend(e.target, { num: 5 }, () => {
        this.countDown = false;
      });
      // }
    } catch (error) {
      //
    }
  }

  /**
   * 登录
   * @param type 登录类型
   */
  async submitForm() {
    // this.reload(); // 刷新页面
    try {
      if (this.loginType === "1") {
        this.perLoginForm.personalOrOrg = this.loginType;
        this.perLoginForm.autoLogin = this.autoLogin ? "1" : "0";
        await (this.$refs.perLoginForm as ElForm).validate();
        const res = await this.systemService.loginDo(this.perLoginForm);
      } else {
        this.orgLoginForm.personalOrOrg = this.loginType;
        this.orgLoginForm.autoLogin = this.autoLogin ? "1" : "0";
        await (this.$refs.orgLoginForm as ElForm).validate();
        const res = await this.systemService.loginDo(this.orgLoginForm);
      }
      this.$message.success("登录成功");
      this.setShowLoginRegister();
      this.reload();
    } catch (error) {
      this.messageError(error);
    }
  }

  /**
   * 显示各种dialog
   */
  showDialog(type: string, status: boolean) {
    this.$emit("showDialog", type, status);
  }

  setShowLoginRegister() {
    this.showLogin = false;
    (this.$refs.perLoginForm as ElForm).resetFields();
    (this.$refs.orgLoginForm as ElForm).resetFields();
  }

  showPopover() {
    this.showLogin = true;
    this.$emit("setShowLoginRegister", "register");
  }

  /* 生命钩子 START */
  mounted() {
    clearInterval(this.timer);
  }
}
