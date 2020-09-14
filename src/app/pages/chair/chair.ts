import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IChairPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "chair",
})
export default class ChairPage extends mixins(BasePage) implements IChairPage {

  title: string = "Chair";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
