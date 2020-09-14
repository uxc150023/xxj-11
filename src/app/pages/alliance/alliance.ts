import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IAlliancePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "alliance",
})
export default class AlliancePage extends mixins(BasePage) implements IAlliancePage {

  title: string = "Alliance";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
