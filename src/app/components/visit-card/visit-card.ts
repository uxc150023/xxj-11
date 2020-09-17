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
export default class VisitCardComp extends Vue {
  title: string = "名片";
  /* 生命钩子 START */
  mounted() {}
}
