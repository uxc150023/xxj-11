import { ElForm } from "element-ui/types/form";
import {
  Component,
  Emit,
  Inject,
  Model,
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
export default class RegisterComp extends ComBaseComp {
  @AutowiredService
  systemService: SystemService;
  showRegister: boolean = false;
  perRegForm: BaseInfo = new BaseInfo();
  orgRegForm: BaseInfo = new BaseInfo();
  registType: string = "1"; // 注册类型
  countDown: boolean = false;
  agreement: boolean = false;
  timer: any;
  options: any[] = [
    { label: "xxx", value: "1" },
    { label: "yyy", value: "2" },
    { label: "zzz", value: "3" },
  ];
  rules: any = {
    autoLogin: [
      { required: true, message: "请先阅读并同意协议", trigger: "change" },
    ],
    password: [{ validator: this.isPawAvailable, trigger: "change" }],
    passwordCommit: [
      { validator: this.passwordCommitAvailable, trigger: "change" },
    ],
    phoneNumber: [{ validator: this.validateMobile, trigger: "change" }],
    verifyCode: [
      { required: true, message: "请输入验证码", trigger: "change" },
    ],
    learningName: [
      { required: true, message: "请输入新学名", trigger: "change" },
    ],
    type: [
      { required: true, message: "请选择单位或社团类型", trigger: "change" },
    ],
    agreement: [
      {
        message: "请先同意协议",
        required: true,
        trigger: "change",
        type: "array",
      },
    ],
  };

  @Inject("reload") reload: any;

  get allowSendMsgPer() {
    return (
      Common.isValidateMobile(this.perRegForm.phoneNumber) && !this.countDown
    );
  }
  get allowSendMsgOrg() {
    return (
      Common.isValidateMobile(this.orgRegForm.phoneNumber) && !this.countDown
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
   * 确认密码校验
   * @param rule
   * @param password
   * @param callback
   */
  passwordCommitAvailable(rule: any, password: any, callback: any) {
    const myreg = PATTERN_REG.password;
    if (!password) {
      callback(new Error("请输入新密码"));
    }
    if (!myreg.test(password)) {
      callback(new Error("8-20位、大小写字母+数据组合"));
    }
    if (this.perRegForm.password !== this.perRegForm.passwordCommit) {
      callback(new Error("两次输入密码不一致"));
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
      if (this.registType === "1") {
        this.countDown = true;
        this.perRegForm.sendType = "1";
        const res = await this.systemService.getVerificationCode(
          this.perRegForm,
        );
        this.perRegForm.verifyCode = res;
      } else {
        this.countDown = true;
        this.orgRegForm.sendType = "2";
        const res = await this.systemService.getVerificationCode(
          this.orgRegForm,
        );
        this.orgRegForm.verifyCode = res;
      }
      this.timer = Common.resend(e.target, { num: 5 }, () => {
        this.countDown = false;
      });
    } catch (error) {
      this.messageError(error);
    }
  }

  /**
   * 注册
   */
  async submitForm() {
    try {
      if (this.registType === "1") {
        await (this.$refs.perRegForm as ElForm).validate();
        const res = await this.systemService.commitPersonalRegister(
          this.perRegForm,
        );
        this.$message.success("恭喜你，注册成功");
        this.showRegister = false;
      } else {
        await (this.$refs.orgRegForm as ElForm).validate();
        const res = await this.systemService.commitRegisterOrg(this.orgRegForm);
        this.$message.success("恭喜你，注册成功");
        this.showRegister = false;
      }
      this.reload(); // 刷新页面
    } catch (error) {
      this.messageError(error);
    }
  }

  setShowLoginRegister() {
    this.showRegister = false;
    (this.$refs.perRegForm as ElForm).resetFields();
    (this.$refs.orgRegForm as ElForm).resetFields();
  }

  showPopover() {
    this.showRegister = true;
    this.$emit("setShowLoginRegister", "login");
  }

  /* 生命钩子 START */
  mounted() {}
}
