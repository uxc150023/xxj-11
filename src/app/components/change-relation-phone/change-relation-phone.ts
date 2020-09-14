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
import { BaseInfo } from "../../core/domain/BaseInfo";
import { SystemService } from "../../core/services/system.serv";

@Component({
  components: {},
})
export default class ChangeRelationPhoneComp extends ComBaseComp {
  @AutowiredService
  systemService: SystemService;
  changeForm: BaseInfo = new BaseInfo();
  countDownOld: boolean = false;
  countDownNew: boolean = false;
  timerOld: any;
  timerNew: any;

  rules: any = {
    learningName: [
      { required: true, message: "请输入新学名", trigger: "change" },
    ],
    newLinkerName: [
      { required: true, message: "请输入新学名", trigger: "change" },
    ],
    newPhoneNumber: [{ validator: this.validateMobile, trigger: "change" }],
    newVerifyCode: [
      { required: true, message: "请输入验证码", trigger: "change" },
    ],
    phoneNumber: [{ validator: this.validateMobile, trigger: "change" }],
    verifyCode: [
      { required: true, message: "请输入验证码", trigger: "change" },
    ],
  };

  @Prop({
    default: false,
  })
  dialogVisible: boolean;

  get allowSendMsgOld() {
    return (
      Common.isValidateMobile(this.changeForm.phoneNumber) && !this.countDownOld
    );
  }
  get allowSendMsgNew() {
    return (
      Common.isValidateMobile(this.changeForm.newPhoneNumber) &&
      !this.countDownNew
    );
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
  async sendMsg(e: any, type: string) {
    try {
      if (type === "old") {
        this.countDownOld = true;
        this.changeForm.sendType = 1;
        const res = await this.systemService.getVerificationCode(
          this.changeForm,
        );
        this.changeForm.verifyCode = res;
        this.timerOld = Common.resend(e.target, { num: 5 }, () => {
          this.countDownOld = false;
        });
      } else {
        this.countDownNew = true;
        this.changeForm.sendType = 1;
        const res = await this.systemService.getVerificationCode(
          this.changeForm,
        );
        this.changeForm.newVerifyCode = res;
        this.timerNew = Common.resend(e.target, { num: 5 }, () => {
          this.countDownNew = false;
        });
      }
    } catch (error) {
      this.messageError(error);
    }
  }

  async commit(type: string) {
    try {
      await (this.$refs[type] as ElForm).validate();
    } catch (error) {
      this.messageError(error);
    }
  }

  handleClose() {
    this.$emit("showDialog", "changeRelationPhoneDialog", false);
  }
  /* 生命钩子 START */
  mounted() {}
}
