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
export default class FindLearningNameComp extends ComBaseComp {
  @AutowiredService
  systemService: SystemService;
  baseForm: BaseInfo = new BaseInfo();
  countDown: boolean = false;
  timer: any;

  rules: any = {
    phoneNumber: [{ validator: this.validateMobile, trigger: "change" }],
    verifyCode: [
      { required: true, message: "请输入验证码", trigger: "change" },
    ],
  };

  @Prop({
    default: false,
  })
  dialogVisible: boolean;

  get allowSendMsg() {
    return (
      Common.isValidateMobile(this.baseForm.phoneNumber) && !this.countDown
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
        this.countDown = true;
        this.baseForm.sendType = 1;
        const res = await this.systemService.getVerificationCode(this.baseForm);
        this.baseForm.verifyCode = res;
        this.timer = Common.resend(e.target, { num: 5 }, () => {
          this.countDown = false;
        });
      } else {
        this.countDown = true;
        this.baseForm.sendType = 10;
        const res = await this.systemService.getVerificationCode(this.baseForm);
        this.baseForm.newVerifyCode = res;
        this.timer = Common.resend(e.target, { num: 5 }, () => {
          this.countDown = false;
        });
      }
    } catch (error) {
      this.messageError(error);
    }
  }

  async commit() {
    try {
      await (this.$refs.baseForm as ElForm).validate();
      await this.systemService.backLearningName(this.baseForm);
    } catch (error) {
      this.messageError(error);
    }
  }

  handleClose() {
    (this.$refs.baseForm as ElForm).resetFields();
    (this.$refs.baseForm as ElForm).resetFields();
    this.$emit("showDialog", "findLearningNameDialog", false);
  }
  /* 生命钩子 START */
  mounted() {
    clearInterval(this.timer);
  }
}
