import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IHomePage {}

@Component({
  components: {},
  name: "home",
})
export default class HomePage extends mixins(BasePage) implements IHomePage {
  title: string = "首页";
  activeName: string = "first";
  fetchData() {
    //
  }

  handleClick() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
