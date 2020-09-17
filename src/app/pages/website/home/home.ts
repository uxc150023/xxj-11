import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface IHomePage {
  /**
   * 激活tab
   */
  activeName: string;
}

@Component({
  components: {},
  name: "home",
})
export default class HomePage extends mixins(BasePage) implements IHomePage {
  activeName: string = "1";
  /**
   * 切换tab
   */
  handleClick() {
    this.$router.push({ params: { tab: this.activeName } });
  }
  /* 生命钩子 START */
  mounted() {
    this.activeName = this.$route.params.tab ? this.$route.params.tab : "1";
  }
}
