import OSS from "ali-oss";
import { Message } from "element-ui";
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

@Component({})
export class ComBaseComp extends Vue {
  messageError(error: any) {
    if (error === "cancel" || error === "close" || !error) {
      return;
    }
    const h = this.$createElement;
    if (error.subMessage || error.errorMessage || (error.msg && !error.stack)) {
      Message({
        message: error.subMessage || error.errorMessage || error.msg,
        type: "error",
      });
    } else if (error.name === "Simultaneous Request") {
      // tslint:disable-next-line:no-console
      console.warn(error.stack);
      // this.$message({
      //   message: h("div", undefined, [
      //     h("p", undefined, "你的重复操作已被取消！"),
      //     h("blockquote", undefined, error.message),
      //   ]),
      //   type: "warning",
      // });
    } else if (error.msg && error.stack) {
      Message({
        dangerouslyUseHTMLString: true,
        message: `<div>
    <p>${error.msg}</p>
    <blockquote>${error.stack}</blockquote>
  </div>
  `,
        type: "error",
      });
    } else {
      Message({ message: JSON.stringify(error), type: "error" });
    }
  }

  /**
   * 文件上传
   * @param data File
   */
  async uploadFile(data: File) {
    const client = new OSS({
      accessKeyId: "LTAI4GEJtkz5yhXUVwRjggJp",
      accessKeySecret: "6Wb89Wm8mfu6FtJVSwrmU9G9fM8CN5",
      bucket: "cyytest",
      region: "oss-cn-shanghai",
    });
    try {
      // object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
      const result = await client.put("abc/test/file.jpg", data);
      return result;
    } catch (error) {
      this.messageError(error);
    }
  }
}
