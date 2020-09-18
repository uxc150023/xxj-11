<template>
  <div class="page-module">
    <visit-card />
    <el-tabs v-model="activeName" :before-leave="beforeLeave">
      <el-tab-pane label="首页" name="1">
        <div>
          <div
            v-for="(item, index) in firstPageList"
            :key="index"
            class="model-item"
          ></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="你还没有这款神器？" name="2">
        <div>
          <xxj-editor />
          <div class="create-web">
            <el-button type="primary" style="width: 546px;font-size: 36px"
              >抢建新一代智能互联网</el-button
            >
            <p>网站+APP+公号+小程序</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="您距智能学网只差5分钟" name="3">
        <div class="type-two">
          <el-form
            :model="createForm"
            :rules="rules"
            ref="createForm"
            class="createForm"
            label-position="left"
            label-width="80px"
          >
            <el-form-item label="学网类型" prop="">
              <el-select
                v-model="createForm.mold"
                placeholder="请选择学网类型"
                style="width: 422px"
              >
                <el-option
                  v-for="(item, index) in webmoldOptions"
                  :label="item.label"
                  :value="item.value"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="学网型号" prop="">
              <el-select
                v-model="createForm.type"
                placeholder="请选择学网型号"
                style="width: 422px"
              >
                <el-option
                  v-for="(item, index) in webmtypeOptions"
                  :label="item.label"
                  :value="item.value"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="新网名" prop="">
              <el-input
                type="text"
                v-model="createForm.name"
                placeholder="请输入新网名"
                style="width: 644px"
              ></el-input>
            </el-form-item>

            <el-form-item label="新网址" prop="">
              <el-input
                type="text"
                v-model="createForm.address"
                placeholder="请输入新网址"
                style="width: 644px"
              ></el-input>
            </el-form-item>

            <el-form-item label="学网定价">
              <p class="web-price"><span>0</span>元</p>
            </el-form-item>
          </el-form>
          <el-button
            type="primary"
            style="width: 166px;font-size: 14px;margin: 0 auto;"
            >提&ensp;交</el-button
          >
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
  .model-item {
    width: 100%;
    background-color: cyan;
    background: #f2f2f2;
    border: 3px solid #e8e8e8;
    height: 310px;
  }
  .create-web {
    text-align: center;
    padding-top: 114px;
    p {
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #1b75f9;
      line-height: 30px;
      letter-spacing: 3px;
      margin-top: 14px;
    }
  }
  .web-price {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #606266;
    line-height: 40px;
    span {
      color: #db2424;
    }
  }
  .type-two {
    margin: 0 auto;
    width: 700px;
  }
}
</style>
