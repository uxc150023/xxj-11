<template>
  <div class="comp-module">
    <div class="editor">
      <div ref="editor" class="editor-content"></div>
    </div>
  </div>
</template>
<script lang="ts" src="./xxj-editor.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
  .editor {
    background: #fff;
    /deep/ {
      .editor-content {
        .w-e-panel-container {
          .w-e-panel-tab-content {
            overflow: hidden;
            .w-e-emoticon-container {
              font-size: 0;
              margin-right: -20px;
              overflow: hidden;
            }
            .w-e-item {
              display: inline-block;
              vertical-align: top;
              width: 12%;
              padding-right: 20px;
              box-sizing: border-box;
              background-clip: content-box;
              font-size: 16px;
              min-height: 27px;
            }
          }
        }
      }
    }
  }
}
</style>
