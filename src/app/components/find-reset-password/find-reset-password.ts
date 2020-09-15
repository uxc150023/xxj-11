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
export default class FindResetPasswordComp extends ComBaseComp {
  @AutowiredService
  systemService: SystemService;
  perForm: BaseInfo = new BaseInfo();
  orgForm: BaseInfo = new BaseInfo();
  resetType: string = "1";
  countDownPer: boolean = false;
  countDownOrg: boolean = false;
  timer: any;

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
    verifyType: [
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

  @Prop({
    default: false,
  })
  dialogVisible: boolean;

  get allowSendMsgPer() {
    return (
      Common.isValidateMobile(this.perForm.phoneNumber) && !this.countDownPer
    );
  }

  get allowSendMsgOrg() {
    return (
      Common.isValidateMobile(this.orgForm.newPhoneNumber) && !this.countDownOrg
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
    if (this.perForm.password !== this.perForm.passwordCommit) {
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
      if (this.resetType === "1") {
        this.countDownPer = true;
        this.perForm.sendType = 4;
        const res = await this.systemService.getVerificationCode(this.perForm);
        this.perForm.verifyCode = res;
        this.timer = Common.resend(e.target, { num: 5 }, () => {
          this.countDownPer = false;
        });
      } else {
        this.countDownOrg = true;
        this.orgForm.sendType = 5;
        const res = await this.systemService.getVerificationCode(this.orgForm);
        this.orgForm.verifyCode = res;
        this.timer = Common.resend(e.target, { num: 5 }, () => {
          this.countDownOrg = false;
        });
      }
    } catch (error) {
      this.messageError(error);
    }
  }

  async commit() {
    try {
      if (this.resetType === "1") {
        await (this.$refs.perForm as ElForm).validate();
        const res = await this.systemService.resetPersonalPassword(
          this.perForm,
        );
        this.dialogVisible = false;
      } else {
        await (this.$refs.orgForm as ElForm).validate();
        const res = await this.systemService.resetPersonalPassword(
          this.orgForm,
        );
      }
      this.$message.success("密码重置成功");
      this.dialogVisible = false;
    } catch (error) {
      this.messageError(error);
    }
  }

  handleClose() {
    (this.$refs.perForm as ElForm).resetFields();
    (this.$refs.orgForm as ElForm).resetFields();
    this.$emit("showDialog", "findResetPswDialog", false);
  }

  /* 生命钩子 START */
  mounted() {}
}
