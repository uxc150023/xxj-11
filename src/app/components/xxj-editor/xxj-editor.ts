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
import Editor from "wangeditor";
import { Face } from "../../../lib/sg-resource/editor";
import { ComBaseComp } from "../../core/ComBaseComp";

@Component({
  components: {},
})
export default class XxjEditorComp extends ComBaseComp {
  editor: any = {};
  editorContent: string = "";
  /* 生命钩子 START */
  mounted() {
    this.editor = new Editor(this.$refs.editor);
    this.editor.customConfig.onchange = (html: any) => {
      this.editorContent = html;
      // this.$emit("contentChange", html); // 同步到父组件中
    };
    this.editor.customConfig.colors = [
      "#000000",
      "#eeece0",
      "#1c487f",
      "#4d80bf",
      "#c24f4a",
      "#8baa4a",
      "#7b5ba1",
      "#46acc8",
      "#f9963b",
      "#ffffff",
    ];
    this.editor.customConfig.menus = [
      // 菜单配置
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "video", // 插入视频
      "code", // 插入代码
      "undo", // 撤销
      "redo", // 重复
    ];
    this.editor.customConfig.emotions = [
      {
        // tab 的标题
        title: "新浪",
        // type -> 'emoji' / 'image'
        type: "image",
        // content -> 数组
        content: Face.xinlang,
      },
      {
        // tab 的标题
        title: "emoji",
        // type -> 'emoji' / 'image'
        type: "emoji",
        // content -> 数组
        content: Face.emoji,
      },
    ];
    this.editor.customConfig.pasteFilterStyle = false; // 关闭粘贴样式的过滤
    this.editor.customConfig.customUploadImg = async (
      files: any,
      insert: any,
    ) => {
      const file = await this.uploadFile(files[0]);
      // files 是 input 中选中的文件列表
      // insert 是获取图片 url 后，插入到编辑器的方法
      // 上传代码返回结果之后，将图片插入到编辑器中
      insert(file!.url);
    };
    this.editor.create(); // 创建富文本实例
  }
}
