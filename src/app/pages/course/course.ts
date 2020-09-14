import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface ICoursePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "course",
})
export default class CoursePage extends mixins(BasePage) implements ICoursePage {

  title: string = "Course";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
