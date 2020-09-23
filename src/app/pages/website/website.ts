import { ElForm } from "element-ui/types/form";
import Component, { mixins } from "vue-class-component";
import { WebsiteService } from "../../../app/core/services/website.serv";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IWebsitePage {
  /**
   * 当前激活tab
   */
  activeName: string;
  /**
   * 首页Url List
   */
  firstPageList: any[];
  /**
   * 接口请求中
   */
  loading: boolean;
  /**
   * 离学网只差5分钟
   */
  createForm: any;
  /**
   * 学网类型
   */
  webmoldOptions: any[];
  /**
   * 学网型号
   */
  webmtypeOptions: any[];
  /**
   * 学网类型和价格
   */
  typeAndPriceTable: any[];
  /**
   * 新学名更新form
   */
  changeForm: any;
  /**
   * 神器内容
   */
  bandContant: string;
  /**
   * 学网升级form
   */
  upgradeForm: any;
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "website",
})
export default class WebsitePage extends mixins(BasePage)
  implements IWebsitePage {
  @AutowiredService
  websiteService: WebsiteService;
  firstPageList: any[] = [];
  activeName: string = "";
  loading: boolean = false;
  bandContant: string = "";
  createForm: any = {
    mold: "", // 类型
    type: "", // 型号
    name: "", // 新网名
    address: "", // 新网址
  };
  webmoldOptions: any[] = [
    { label: "xx", value: 1 },
    { label: "yy", value: 2 },
    { label: "zz", value: 3 },
  ];
  webmtypeOptions: any[] = [
    { label: "xx", value: 1 },
    { label: "yy", value: 2 },
    { label: "zz", value: 3 },
  ];
  typeAndPriceTable: any[] = [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    },
  ];
  changeForm: any = {
    address: "",
    name1: "",
    name2: "",
  };
  upgradeForm: any = {
    address: "",
    name1: "",
    name2: "",
  };
  rules: any = {
    // learningName: [
    //   { required: true, message: "请输入新学名", trigger: "change" },
    // ],
    // password: [{ validator: this.isPawAvailable, trigger: "change" }],
    // // phoneNumber: [{ validator: this.validateMobile, trigger: "change" }],
    // phoneNumber: [
    //   { required: true, message: "请输入注册手机/新学名", trigger: "change" },
    // ],
    // verifyCode: [
    //   { required: true, message: "请输入验证码", trigger: "change" },
    // ],
  };

  fetchData() {
    //
  }

  /**
   * 切换tab
   * @param activeName
   * @param oldActiveName
   */
  beforeLeave(activeName: string) {
    if (this.loading) {
      this.$message.warning("数据获取中，请稍后再试");
      return false;
    }
    this.$router.push({ params: { step: activeName } });
    switch (activeName) {
      case "1":
        this.getFirstPageUrl();
        break;
      case "2":
        this.getListArtifact();
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;

      default:
        break;
    }
  }

  /**
   * click抢建新一代智能互联网
   */
  commit() {
    switch (this.activeName) {
      case "1":
        break;
      case "2":
        this.commitSaveArtifact();
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      default:
        break;
    }
  }

  /**
   * 获取首页图片
   */
  async getFirstPageUrl() {
    try {
      this.loading = true;
      const res = await this.websiteService.getFirstPageUrl({});
      this.firstPageList = res;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.messageError(error);
    }
  }

  /**
   * 这款神器 - 保存
   */
  async commitSaveArtifact() {
    try {
      await this.websiteService.saveArtifact(this.bandContant);
      this.$message.success("保存成功");
    } catch (error) {
      this.messageError(error);
    }
  }

  /**
   * 这款神器 - 查询
   */
  async getListArtifact() {
    try {
      const res = await this.websiteService.listArtifact();
      this.bandContant = res[0].bandContant;
      (this.$refs.editor as any).setContent(this.bandContant);
    } catch (error) {
      this.messageError(error);
    }
  }

  /**
   * 获取编辑器内容
   * @param html editor内容
   */
  contentChange(html: any) {
    this.bandContant = html;
  }

  created() {
    this.activeName = this.$route.params.step ? this.$route.params.step : "1";
    this.beforeLeave(this.activeName);
  }
}
