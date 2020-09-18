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
  activeMenu: string = "";
  tabs: any[] = [
    { label: "建站", index: "/website" },
    { label: "学群", index: "/write" },
    { label: "理事", index: "/masterwork" },
    { label: "办公室", index: "/masterwork" },
    { label: "财务室", index: "/masterwork" },
    { label: "资料室", index: "/masterwork" },
  ];
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
  mounted() {
    const path = this.$route.path;
    const m = path.match(/^\/\w+/);
    console.log("====", m);
    if (m != null) {
      this.activeMenu = m[0];
      // this.activeMenu = this.$route.path || path;
    } else {
      this.activeMenu = "/";
    }
  }
}
