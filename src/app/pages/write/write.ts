import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IWritePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "write",
})
export default class WritePage extends mixins(BasePage) implements IWritePage {

  title: string = "Write";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
