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
          >
            <div class="model-item-div"></div>
            <p class="model-item-p">新一代智能互联网 个人主站</p>
          </div>
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

              <a class="type-a">学网类型与型号</a>
            </el-form-item>

            <el-form-item label="新网名" prop="">
              <el-input
                type="text"
                v-model="createForm.name"
                placeholder="请填写您喜欢的网名"
                style="width: 644px"
              ></el-input>
            </el-form-item>

            <el-form-item label="新网址" prop="">
              <el-input
                type="text"
                v-model="createForm.address"
                placeholder="请填写您中意的网址"
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
      <el-tab-pane label="学网类型与价格" name="4">
        <el-table :data="typeAndPriceTable" border style="width: 100%">
          <el-table-column prop="date" label="类型编号" width="180">
          </el-table-column>
          <el-table-column prop="name" label="学网类型" width="180">
          </el-table-column>
          <el-table-column prop="address" label="基础型"> </el-table-column>
          <el-table-column prop="address" label="标准型"> </el-table-column>
          <el-table-column prop="address" label="高标型"> </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="名号更新" name="5">
        <div class="learnName-change">
          <p class="change-title">新学名号更新</p>
          <div class="change-dev">
            <div>
              <el-form label-width="82px" label-position="left">
                <el-form-item label="原有新学名" prop="">
                  <p class="change-label">xxxxxx</p>
                </el-form-item>
                <el-form-item label="原有新网名" prop="">
                  <p class="change-label">yyyyyyy</p>
                </el-form-item>
                <el-form-item label="原有新网址" prop="">
                  <p class="change-label">zzzzzzz</p>
                </el-form-item>
              </el-form>
            </div>
            <div>
              <el-form
                :model="changeForm"
                :rules="rules"
                ref="changeForm"
                class="changeForm"
                label-position="right"
                label-width="82px"
              >
                <el-form-item label="现更新为" prop="">
                  <el-input
                    type="text"
                    v-model="changeForm.name1"
                    placeholder="请填写您中意的网址"
                    style="width: 380px"
                  ></el-input>
                </el-form-item>

                <el-form-item label="现更新为" prop="">
                  <el-input
                    type="text"
                    v-model="changeForm.name2"
                    placeholder="请填写您中意的网址"
                    style="width: 380px"
                  ></el-input>
                </el-form-item>

                <el-form-item label="现更新为" prop="">
                  <el-input
                    type="text"
                    v-model="changeForm.address"
                    placeholder="请填写您中意的网址"
                    style="width: 380px"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <el-button
            type="primary"
            style="width: 166px;font-size: 14px;margin: 0 auto;"
            >提&ensp;交</el-button
          >
        </div>
      </el-tab-pane>
      <el-tab-pane label="学网升级" name="6">
        <div class="web-upgrade">
          <p class="change-title">学网升级</p>
          <div>
            <el-form
              :model="upgradeForm"
              :rules="rules"
              ref="upgradeForm"
              class="upgradeForm"
              label-position="left"
              label-width="82px"
            >
              <el-form-item label="新网名" prop="">
                <p class="upgrade-label">xxxxx</p>
              </el-form-item>

              <el-form-item label="学网原类型" prop="">
                <p class="upgrade-label">xxxxx</p>
              </el-form-item>

              <el-form-item label="学网原型号" prop="">
                <p class="upgrade-label">xxxxx</p>
              </el-form-item>

              <el-form-item label="现升级型号" prop="">
                <el-select
                  v-model="createForm.type"
                  placeholder="请选择学网型号"
                  style="width: 420px"
                >
                  <el-option
                    v-for="(item, index) in webmtypeOptions"
                    :label="item.label"
                    :value="item.value"
                    :key="index"
                  ></el-option>
                </el-select>
                <a class="type-a">学网类型与型号</a>
              </el-form-item>

              <el-form-item label="学网定价">
                <p class="web-price"><span>0</span>元</p>
              </el-form-item>
            </el-form>
            <el-button
              type="primary"
              style="width: 166px;font-size: 14px;margin: 0 auto;"
              >确&ensp;定</el-button
            >
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="原来是这伙人干的" name="7">
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
    </el-tabs>
  </div>
</template>
<script lang="ts" src="./website.ts"></script>
<style lang="scss" scoped>
.page-module {
  .model-item {
    width: 100%;
    .model-item-div {
      background-color: cyan;
      background: #f2f2f2;
      border: 3px solid #e8e8e8;
      width: 100%;
      height: 310px;
    }
    .model-item-p {
      font-size: 36px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #486070;
      line-height: 50px;
      text-align: center;
      margin-bottom: 32px;
    }
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
  .type-a {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #4b8de8;
    margin-left: 30px;
    cursor: pointer;
  }
  .learnName-change {
    margin: 0 auto;
    width: 928px;
    .change-dev {
      display: flex;
    }
    .change-label {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #909399;
      width: 380px;
      height: 40px;
      background: #f5f7fa;
      border-radius: 4px;
      padding: 0 18px;
    }
  }
  .change-title {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #b9b9b9;
    line-height: 25px;
    text-align: center;
    margin: 50px 0 46px 0;
  }
  .web-upgrade {
    width: 800px;
    margin: auto;
  }
  .upgrade-label {
    width: 640px;
    height: 40px;
    background: #f5f7fa;
    border-radius: 4px;
    padding: 0 18px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #909399;
  }
  /deep/ {
    .el-tabs {
      .el-tabs__item {
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
      }
      .el-tabs__item.is-active {
        color: #0092ff;
      }
      .el-tabs__item:hover {
        color: #0092ff;
        cursor: pointer;
      }
    }
  }
}
</style>
