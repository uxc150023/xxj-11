import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IPersonagePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "personage",
})
export default class PersonagePage extends mixins(BasePage) implements IPersonagePage {

  title: string = "Personage";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
