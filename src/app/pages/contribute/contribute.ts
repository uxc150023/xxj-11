import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IContributePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "contribute",
})
export default class ContributePage extends mixins(BasePage) implements IContributePage {

  title: string = "Contribute";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
