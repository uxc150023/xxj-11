<template>
  <div class="page-module">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="first" name="first">first</el-tab-pane>
      <el-tab-pane label="second" name="second">second</el-tab-pane>
      <el-tab-pane label="third" name="third">third</el-tab-pane>
      <el-tab-pane label="fourth" name="fourth">fourth</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" src="./home.ts"></script>
<style lang="scss" scoped>
$color: #333;

.page-module {
  color: $color;
  font-size: 0.6rem;
}
</style>
