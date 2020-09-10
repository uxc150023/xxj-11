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
import Common from "../../core/common";
import { PATTERN_REG } from "../../core/constants";
import { LoginInfo } from "../../core/domain/loginInfo";
import { SystemService } from "../../core/services/system.serv";

@Component({
  components: {},
})
export default class RegisterComp extends Vue {
  @AutowiredService
  systemService: SystemService;
  showLogin: boolean = false;
  tabPosition: string = "per"; // per个人  org社团
  perRegForm: LoginInfo = new LoginInfo();
  orgRegForm: LoginInfo = new LoginInfo();
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
    verifyType: [
      { required: true, message: "请选择单位或社团类型", trigger: "change" },
    ],
  };
  countDown: boolean;
  timer: any;

  get allowSendMsgPer() {
    return (
      Common.isValidateMobile(this.perRegForm.phoneNumber) && !this.countDown
    );
  }
  get allowSendMsgOrg() {
    return (
      Common.isValidateMobile(this.orgRegForm.newPhoneNumber) && !this.countDown
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
      this.countDown = true;
      const res = await this.systemService.commitRegiste(this.perRegForm);
      this.timer = Common.resend(e.target, { num: 5 }, () => {
        this.countDown = false;
      });
    } catch (error) {
      //
    }
  }

  /**
   * 注册
   * @param type 注册类型
   */
  async submitForm(type: string) {
    try {
      await (this.$refs[type] as ElForm).validate();
      console.log("success");
    } catch (error) {
      // this.$message.error("请完善信息");
    }
  }

  /* 生命钩子 START */
  mounted() {}
}
