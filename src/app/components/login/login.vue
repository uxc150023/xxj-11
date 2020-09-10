<template>
  <div class="login-page">
    <el-popover
      placement="bottom"
      trigger="manual"
      popper-class="login-popper"
      v-model="showLogin"
    >
      <p><span>xxx</span> <span>yyy</span></p>
      <i class="el-icon-close" @click="showLogin = false"></i>
      <el-radio-group v-model="loginType" style="margin-bottom: 30px;">
        <el-radio-button label="per">个人注册</el-radio-button>
        <el-radio-button label="org">机构或社团等注册</el-radio-button>
      </el-radio-group>

      <el-tabs v-model="loginType" class="login-tabs">
        <el-tab-pane label="" name="per">
          <el-form
            :model="perLoginForm"
            :rules="rules"
            ref="perLoginForm"
            class="loginForm"
          >
            <el-form-item label="" prop="phoneNumber">
              <el-input
                type="tel"
                v-model="perLoginForm.phoneNumber"
                placeholder="请输入手机号"
                size="large"
                style="width: 512px"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="verifyCode" v-if="perLoginType">
              <div class="flex">
                <el-input
                  type="text"
                  v-model="perLoginForm.verifyCode"
                  placeholder="手机验证码"
                  size="large"
                  style="width: 260px"
                ></el-input>
                <div class="sms-btn">
                  <el-button
                    ref="msgBtn"
                    size="large"
                    class="smsCode-button"
                    :disabled="!allowSendMsgPer"
                    @click="sendMsg($event)"
                    >获取验证码</el-button
                  >
                </div>
              </div>
            </el-form-item>

            <el-form-item label="" prop="password" v-if="!perLoginType">
              <el-input
                type="password"
                v-model="perLoginForm.password"
                placeholder="请用8-20位数字加字母登录密码"
                size="large"
                style="width: 512px"
                show-password
              ></el-input>
            </el-form-item>

            <div class="perLoginType">
              <a>找回密码</a>
              <a v-if="perLoginType" @click="perLoginType = 0">用密码登录</a>
              <a v-if="!perLoginType" @click="perLoginType = 1">用短信登录</a>
            </div>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('perLoginForm')"
                size="large"
                style="width: 512px;font-size: 32px;"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="" name="org">
          <el-form
            :model="orgLoginForm"
            :rules="rules"
            ref="orgLoginForm"
            class="loginForm"
          >
            <el-form-item label="" prop="learningName">
              <el-input
                type="text"
                v-model="orgLoginForm.learningName"
                placeholder="新学名（注册的单位/社团简称或昵称）"
                size="large"
                style="width: 512px"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="password">
              <el-input
                type="password"
                v-model="orgLoginForm.password"
                placeholder="密码"
                size="large"
                style="width: 512px"
                show-password
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('orgLoginForm')"
                size="large"
                style="width: 512px;font-size: 32px;"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>

      <span slot="reference" class="btn" @click="showLogin = true">登录</span>
    </el-popover>
  </div>
</template>
<script lang="ts" src="./login.ts"></script>
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
.loginForm {
  .perLoginType {
    text-align: right;
    display: flex;
    justify-content: space-between;
    a {
      cursor: pointer;
    }
  }

  .sms-btn {
    width: 253px;
    button {
      font-size: 22px;
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
