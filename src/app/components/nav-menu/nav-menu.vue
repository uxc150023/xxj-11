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
    <div class="right-btns">
      <a>宝藏</a>
      <a>转发</a>
    </div>
  </div>
</template>
<script lang="ts" src="./nav-menu.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
  padding: 10px 0;
  background-color: #ffffff;
  position: relative;
  /deep/ {
    .el-menu {
      border-bottom: none;
      .el-menu-item {
        padding: 1px 10px;
        font-size: 30px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        line-height: 38px;
        margin-right: 24px;
      }
    }
    .el-menu--horizontal > .el-menu-item {
      height: 40px;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #3b5369;
      line-height: 38px;
      border-radius: 4px;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
      font-size: 30px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 38px;
      border: none;
      background-color: #115ef9 !important;
    }
    .right-btns {
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      top: 10px;
      a {
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #3377ff;
        line-height: 40px;
        margin-left: 28px;
        cursor: pointer;
      }
    }
  }
}
</style>
