<template>
  <div class="page-module">
    <headbar></headbar>
    <el-container>
      <el-container>
        <el-aside style="width: 300px;">
          <rightview></rightview>
        </el-aside>
        <el-container>
          <el-main>
            <nav-menu :tabs="tabs"></nav-menu>
            <router-view />
          </el-main>
          <el-footer>新学界（上海）文教科技有限公司</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped>
.page-module {
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding-left: 300px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: calc(100vh);
    position: fixed;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    min-height: calc(100vh - 60px);
    overflow: hidden;
    overflow-y: auto;
    padding: 46px 6px 6px 6px;
    width: calc(100% - 300px);
    margin-left: 300px;
    background-color: #fff;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
