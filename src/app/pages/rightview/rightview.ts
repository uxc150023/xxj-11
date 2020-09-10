import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IRightviewPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "rightview",
})
export default class RightviewPage extends mixins(BasePage) implements IRightviewPage {

  title: string = "Rightview";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
