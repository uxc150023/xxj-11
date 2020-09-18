<template>
  <div class="login-page">
    <el-popover
      placement="bottom"
      trigger="manual"
      popper-class="common-popper"
      v-model="showRegister"
    >
      <div class="common-popper-header">
        <p class="title"><span>新学界</span> &ensp; <span>MY世界</span></p>
        <i class="el-icon-close" @click="showRegister = false"></i>
      </div>

      <div class="common-popper-body">
        <el-radio-group v-model="registType" style="margin-bottom: 30px;">
          <el-radio-button label="1">个人注册</el-radio-button>
          <el-radio-button label="2">机构或社团等注册</el-radio-button>
        </el-radio-group>

        <el-tabs v-model="registType" class="login-tabs">
          <el-tab-pane label="" name="1">
            <el-form :model="perRegForm" :rules="rules" ref="perRegForm">
              <el-form-item label="" prop="phoneNumber">
                <el-input
                  type="tel"
                  v-model="perRegForm.phoneNumber"
                  placeholder="请输入手机号"
                  style="width: 512px"
                ></el-input>
              </el-form-item>
              <el-form-item label="" prop="verifyCode">
                <div class="flex">
                  <el-input
                    type="text"
                    v-model="perRegForm.verifyCode"
                    placeholder="手机验证码"
                    style="width: 260px;flex: 1;"
                    class="border-right-none"
                  ></el-input>
                  <el-button
                    ref="msgBtn"
                    class="smsCode-button"
                    :disabled="!allowSendMsgPer"
                    style="width: 253px;"
                    @click="sendMsg($event)"
                    >获取验证码</el-button
                  >
                </div>
              </el-form-item>

              <el-form-item label="" prop="password">
                <el-input
                  type="password"
                  v-model="perRegForm.password"
                  placeholder="请用8-20位数字加字母设置密码"
                  style="width: 512px"
                ></el-input>
              </el-form-item>
              <el-form-item label="" prop="passwordCommit">
                <el-input
                  type="password"
                  v-model="perRegForm.passwordCommit"
                  placeholder="请再次输入密码"
                  style="width: 512px"
                ></el-input>
              </el-form-item>

              <el-form-item label="" prop="agreement" class="agreement-item">
                <el-checkbox-group v-model="perRegForm.agreement">
                  <el-checkbox value="1">同意新学界注册协议</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="" name="2">
            <el-form :model="orgRegForm" :rules="rules" ref="orgRegForm">
              <el-form-item label="" prop="learningName">
                <el-input
                  type="text"
                  v-model="orgRegForm.learningName"
                  placeholder="新学名（单位全称/简称/昵称，2字及以上）"
                  style="width: 512px"
                ></el-input>
              </el-form-item>
              <el-form-item label="" prop="type">
                <el-select
                  v-model="orgRegForm.type"
                  placeholder="单位或社团类型 "
                  style="width: 512px"
                >
                  <el-option
                    v-for="(item, index) in options"
                    :label="item.label"
                    :value="item.value"
                    :key="index"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="" prop="phoneNumber">
                <el-input
                  type="tel"
                  v-model="orgRegForm.phoneNumber"
                  placeholder="联系人手机号"
                  style="width: 512px"
                ></el-input>
              </el-form-item>
              <el-form-item label="" prop="verifyCode">
                <div class="flex">
                  <el-input
                    type="text"
                    v-model="orgRegForm.verifyCode"
                    placeholder="手机验证码"
                    style="width: 260px"
                    class="border-right-none"
                  ></el-input>
                  <el-button
                    ref="msgBtn"
                    class="smsCode-button"
                    :disabled="!allowSendMsgOrg"
                    style="width: 253px;"
                    @click="sendMsg($event)"
                    >获取验证码</el-button
                  >
                </div>
              </el-form-item>

              <el-form-item label="" prop="password">
                <el-input
                  type="password"
                  v-model="orgRegForm.password"
                  placeholder="请用8-20位数字加字母设置密码"
                  style="width: 512px"
                ></el-input>
              </el-form-item>
              <el-form-item label="" prop="passwordCommit">
                <el-input
                  type="password"
                  v-model="orgRegForm.passwordCommit"
                  placeholder="请再次输入密码"
                  style="width: 512px"
                ></el-input>
              </el-form-item>

              <el-form-item label="" prop="agreement" class="agreement-item">
                <el-checkbox-group v-model="orgRegForm.agreement">
                  <el-checkbox label="1">同意新学界注册协议</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
        <el-button
          type="primary"
          @click="submitForm"
          style="width: 512px;font-size: 24px;"
        >
          注&ensp;册
        </el-button>
      </div>
      <span slot="reference" class="btn" @click="showPopover">注册</span>
      <div class="common-popper-footer"></div>
    </el-popover>
  </div>
</template>
<script lang="ts" src="./register.ts"></script>
<style lang="scss" scoped>
$color: #333;

.login-page {
  color: $color;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  /deep/ {
    .el-form-item__content {
      text-align: center;
    }
  }
  .btn {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;
    margin-right: 20px;
  }
}
.login-tabs {
  /deep/ {
    .el-tabs__header {
      display: none;
    }
  }
}
.el-icon-close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #000000;
  font-size: 17px;
}
.agreement-item {
  /deep/ {
    .el-form-item__content {
      line-height: 8px;
    }
  }
}
</style>
