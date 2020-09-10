<template>
  <div class="login-page">
    <el-popover
      placement="bottom"
      trigger="click"
      popper-class="login-popper"
      v-model="showLogin"
    >
      <p><span>xxx</span> <span>yyy</span></p>
      <i class="el-icon-close" @click="showLogin = false"></i>
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="per">个人注册</el-radio-button>
        <el-radio-button label="org">机构或社团等注册</el-radio-button>
      </el-radio-group>

      <el-tabs v-model="tabPosition" class="login-tabs">
        <el-tab-pane label="" name="per">
          <el-form
            :model="perRegForm"
            :rules="rules"
            ref="perRegForm"
            class="demo-loginForm"
          >
            <el-form-item label="" prop="phoneNumber">
              <el-input
                type="tel"
                v-model="perRegForm.phoneNumber"
                placeholder="请输入手机号"
                size="large"
                style="width: 512px"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="verifyCode">
              <div class="flex">
                <el-input
                  type="text"
                  v-model="perRegForm.verifyCode"
                  placeholder="手机验证码"
                  size="large"
                  style="width: 260px"
                ></el-input>
                <el-button
                  ref="msgBtn"
                  size="large"
                  class="smsCode-button"
                  :disabled="!allowSendMsgPer"
                  style="width: 253px;font-size: 22px;"
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
                size="large"
                style="width: 512px"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="passwordCommit">
              <el-input
                type="password"
                v-model="perRegForm.passwordCommit"
                placeholder="请再次输入密码"
                size="large"
                style="width: 512px"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="autoLogin">
              <el-checkbox-group v-model="perRegForm.autoLogin">
                <el-checkbox label="1">同意新学界注册协议</el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('perRegForm')"
                size="large"
                style="width: 512px;font-size: 32px;"
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="" name="org">
          <el-form
            :model="orgRegForm"
            :rules="rules"
            ref="orgRegForm"
            class="demo-loginForm"
          >
            <el-form-item label="" prop="learningName">
              <el-input
                type="text"
                v-model="orgRegForm.learningName"
                placeholder="新学名（单位全称/简称/昵称，2字及以上）"
                size="large"
                style="width: 512px"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="verifyType">
              <el-select
                v-model="orgRegForm.verifyType"
                placeholder="单位或社团类型 "
                size="large"
                style="width: 512px"
              >
                <el-option
                  :label="item.label"
                  :value="item.index"
                  v-for="(item, index) in options"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="phoneNumber">
              <el-input
                type="tel"
                v-model="orgRegForm.newPhoneNumber"
                placeholder="联系人手机号"
                size="large"
                style="width: 512px"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="verifyCode">
              <div class="flex">
                <el-input
                  type="text"
                  v-model="orgRegForm.newVerifyCode"
                  placeholder="手机验证码"
                  size="large"
                  style="width: 260px"
                ></el-input>
                <el-button
                  ref="msgBtn"
                  size="large"
                  class="smsCode-button"
                  :disabled="!allowSendMsgOrg"
                  style="width: 253px;font-size: 22px;"
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
                size="large"
                style="width: 512px"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="passwordCommit">
              <el-input
                type="password"
                v-model="orgRegForm.passwordCommit"
                placeholder="请再次输入密码"
                size="large"
                style="width: 512px"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="autoLogin">
              <el-checkbox-group v-model="orgRegForm.autoLogin">
                <el-checkbox label="1">同意新学界注册协议</el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('orgRegForm')"
                size="large"
                style="width: 512px;font-size: 32px;"
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>

      <span slot="reference" class="btn">注册</span>
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
</style>
