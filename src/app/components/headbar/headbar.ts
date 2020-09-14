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

@Component({
  components: {},
})
export default class HeadbarComp extends Vue {
  changeBindPhoneDialog: boolean = false; // 更换绑定手机
  findResetPswDialog: boolean = false; // 找回重置密码
  findLearningNameDialog: boolean = false; // 找回新学名
  changeRelationPhoneDialog: boolean = false; // 更换联系手机
  handleCommand() {}

  /**
   * 显示dialog
   */
  showDialog(type: string, status: boolean) {
    switch (type) {
      case "changeBindPhoneDialog":
        this.changeBindPhoneDialog = status;
        break;
      case "findResetPswDialog":
        this.findResetPswDialog = status;
        break;
      case "findLearningNameDialog":
        this.findLearningNameDialog = status;
        break;
      case "changeRelationPhoneDialog":
        this.changeRelationPhoneDialog = status;
        break;
      default:
        break;
    }
  }
  setShowLoginRegister(type: string) {
    (this.$refs[type] as any).setShowLoginRegister();
  }
  /* 生命钩子 START */
  mounted() {}
}
