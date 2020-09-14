import { Aside, Container, Footer, Header, Main } from "element-ui";
import Vue from "vue";
import Component from "vue-class-component";
import { Provide } from "vue-property-decorator";
import { mapState } from "vuex";

// Register the router hooks with their names
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate", // for vue-router 2.2+
]);

@Component({
  components: {},
  computed: {},
})
export default class App extends Vue {
  isRouterAlive: boolean = true;

  @Provide()
  reload = this.reloads;

  reloads() {
    this.isRouterAlive = false; // 先关闭，
    this.$nextTick(function() {
      this.isRouterAlive = true; // 再打开
    });
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
