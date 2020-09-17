import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IWebsitePage {
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
  title: string = "Website";
  tabs: any[] = [
    { label: "首页", index: "/home" },
    { label: "写录", index: "/write" },
    { label: "名著", index: "/masterwork" },
    { label: "课程", index: "/course" },
    { label: "讲座", index: "/chair" },
    { label: "会议", index: "/meeting" },
    { label: "送书", index: "/presentbook" },
    { label: "投稿", index: "/contribute" },
    { label: "竞赛", index: "/competition" },
    // { label: "联盟", index: "/alliance" },
    // { label: "角色", index: "/personage" },
  ];
  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
