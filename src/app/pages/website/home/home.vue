<template>
  <div class="page-module">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="新学鱼雁" name="1">1</el-tab-pane>
      <el-tab-pane label="新学浪潮" name="2">2</el-tab-pane>
      <el-tab-pane label="新学峰峦" name="3">3</el-tab-pane>
      <el-tab-pane label="新学专列" name="4">4</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" src="./home.ts"></script>
<style lang="scss" scoped>
$color: #333;

.page-module {
  color: $color;
  font-size: 0.6rem;
  /deep/ {
    .el-tabs {
      .el-tabs__item {
        font-size: 20px;
      }
    }
  }
}
</style>
