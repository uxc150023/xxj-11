import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from "vue-property-decorator";

@Component({
  components: {},
})
export default class NavMenuComp extends Vue {
  activeMenu: string = "";
  @Prop({
    default: () => {
      return [];
    },
  })
  tabs: any[];

  @Watch("$route.path")
  routrChange(valueNew: string, valueOld: string) {
    const m = valueNew.match(/^\/\w+/);
    if (m != null) {
      this.activeMenu = this.$route.path || valueNew;
    } else {
      this.activeMenu = "/";
    }
  }

  mounted() {
    const path = this.$route.path;
    const m = path.match(/^\/\w+/);
    if (m != null) {
      this.activeMenu = this.$route.path || path;
    } else {
      this.activeMenu = "/";
    }
  }
}
