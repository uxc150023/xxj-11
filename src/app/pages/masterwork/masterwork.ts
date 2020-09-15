import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IMasterworkPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "masterwork",
})
export default class MasterworkPage extends mixins(BasePage)
  implements IMasterworkPage {
  title: string = "Masterwork";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
