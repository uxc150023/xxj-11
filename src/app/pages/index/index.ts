import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";
import rightview from "../rightview/rightview";

interface IIndexPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: { rightview },
  name: "index",
})
export default class IndexPage extends mixins(BasePage) implements IIndexPage {
  title: string = "Index";
  tabs: any[] = [
    { label: "首页", value: "/home" },
    { label: "写录", value: "/write" },
    { label: "名著", value: "/masterwork" },
    { label: "课程", value: "/course" },
    { label: "讲座", value: "/chair" },
    { label: "会议", value: "/meeting" },
    { label: "送书", value: "/presentbook" },
    { label: "投稿", value: "/contribute" },
    { label: "竞赛", value: "/competition" },
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
