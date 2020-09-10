<template>
  <div class="comp-module">
    <el-menu
      :default-active="activeMenu"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      style="min-width: 1300px"
    >
      <el-menu-item
        v-for="(item, index) in tabs"
        :key="index"
        :index="item.index"
      >
        {{ item.label }}
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts" src="./nav-menu.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
  /deep/ {
    .el-menu--horizontal > .el-menu-item {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
