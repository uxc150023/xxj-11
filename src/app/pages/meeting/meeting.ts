import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IMeetingPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "meeting",
})
export default class MeetingPage extends mixins(BasePage) implements IMeetingPage {

  title: string = "Meeting";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
