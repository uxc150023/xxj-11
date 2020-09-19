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

  created() {
    this.activeName = this.$route.params.step ? this.$route.params.step : "1";
    this.beforeLeave(this.activeName);
  }
}
