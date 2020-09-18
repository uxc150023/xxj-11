<template>
  <div class="page-module">
    <visit-card />
    <el-tabs v-model="activeName" :before-leave="beforeLeave">
      <el-tab-pane label="首页" name="1">
        <div>
          <div v-for="(item, index) in firstPageList" :key="index"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="你还没有这款神器？" name="2">
        <div>
          <xxj-editor />
        </div>
      </el-tab-pane>
      <el-tab-pane label="您距智能学网只差5分钟" name="3">
        <div>
          <el-form
            :model="createForm"
            :rules="rules"
            ref="createForm"
            class="createForm"
          >
            <el-form-item label="" prop="phoneNumber">
              <el-input
                type="text"
                v-model="createForm.phoneNumber"
                placeholder="请输入注册手机/新学名"
                style="width: 512px"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="学网类型与价格" name="4">4</el-tab-pane>
      <el-tab-pane label="名号更新" name="5">5</el-tab-pane>
      <el-tab-pane label="学网升级" name="6">6</el-tab-pane>
      <el-tab-pane label="原来是这伙人干的" name="7">7</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" src="./website.ts"></script>
<style lang="scss" scoped>
.page-module {
}
</style>
