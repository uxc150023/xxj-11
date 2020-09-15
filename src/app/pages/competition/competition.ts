import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface ICompetitionPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "competition",
})
export default class CompetitionPage extends mixins(BasePage) implements ICompetitionPage {

  title: string = "Competition";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
