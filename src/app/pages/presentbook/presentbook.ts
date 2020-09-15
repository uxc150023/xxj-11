import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IPresentbookPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "presentbook",
})
export default class PresentbookPage extends mixins(BasePage) implements IPresentbookPage {

  title: string = "Presentbook";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
