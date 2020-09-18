<template>
  <div class="login-page">
    <el-popover
      placement="bottom"
      trigger="manual"
      popper-class="common-popper"
      v-model="showLogin"
    >
      <div class="common-popper-header">
        <p class="title"><span>新学界</span>&ensp;<span>MY世界</span></p>
        <i class="el-icon-close" @click="showLogin = false"></i>
      </div>
      <div class="common-popper-body">
        <el-radio-group v-model="loginType" style="margin-bottom: 30px;">
          <el-radio-button label="1">个人登录</el-radio-button>
          <el-radio-button label="2">机构或社团等登录</el-radio-button>
        </el-radio-group>

        <el-tabs v-model="loginType" class="login-tabs">
          <el-tab-pane label="" name="1">
            <el-form
              :model="perLoginForm"
              :rules="rules"
              ref="perLoginForm"
              class="loginForm"
            >
              <el-form-item label="" prop="phoneNumber">
                <el-input
                  type="text"
                  v-model="perLoginForm.phoneNumber"
                  placeholder="请输入注册手机/新学名"
                  style="width: 512px"
                  class="border-right-none"
                ></el-input>
              </el-form-item>
              <transition
                name="animated "
                enter-active-class="animated  fadeInUp"
                leave-active-class="animated fadeOutDown"
              >
                <el-form-item v-show="pictureVisiable" class="smsCode">
                  <div class="flex">
                    <el-input
                      v-model="ruleSmsCode"
                      style="flex: 1"
                      placeholder="请输入验证码"
                      class="border-right-none"
                    ></el-input>
                    <div
                      style="width: 91px;height: 46px"
                      class="fr pointer"
                      @click="sendMsg(msgBtn, true)"
                    >
                      <img :src="pictureUrl" alt title="看不清， 换一张" />
                    </div>
                  </div>
                </el-form-item>
              </transition>
              <el-form-item label="" prop="verifyCode" v-if="perLoginType">
                <div class="flex">
                  <el-input
                    type="text"
                    v-model="perLoginForm.verifyCode"
                    placeholder="手机验证码"
                    style="width: 260px"
                    class="border-right-none"
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
                  style="width: 512px"
                  show-password
                ></el-input>
              </el-form-item>

              <div class="perLoginType">
                <a></a>
                <a v-if="perLoginType" @click="perLoginType = 0">用密码登录</a>
                <a v-if="!perLoginType" @click="perLoginType = 1">用短信登录</a>
              </div>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="" name="2">
            <el-form
              :model="orgLoginForm"
              :rules="rules"
              ref="orgLoginForm"
              class="loginForm"
            >
              <el-form-item
                label=""
                prop="phoneNumber"
                :rules="{
                  required: true,
                  message: '请输入新学名',
                  trigger: 'change',
                }"
              >
                <el-input
                  type="text"
                  v-model="orgLoginForm.phoneNumber"
                  placeholder="新学名（注册的单位/社团简称或昵称）"
                  style="width: 512px"
                ></el-input>
              </el-form-item>

              <el-form-item label="" prop="password">
                <el-input
                  type="password"
                  v-model="orgLoginForm.password"
                  placeholder="密码"
                  style="width: 512px"
                  show-password
                ></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <div>
            <el-button
              type="primary"
              @click="submitForm"
              style="width: 512px;font-size: 24px;"
              >登&ensp;录</el-button
            >
            <div class="login-bottom">
              <el-checkbox-group v-model="autoLogin">
                <el-checkbox value="1">下次自动登录</el-checkbox>
              </el-checkbox-group>
              <div>
                <a @click="showDialog('findResetPswDialog', true)">找回密码</a>
                <a
                  @click="showDialog('changeBindPhoneDialog', true)"
                  v-if="loginType === '1'"
                  >更换手机</a
                >
                <a
                  @click="showDialog('findLearningNameDialog', true)"
                  v-if="loginType === '2'"
                  >忘记新学名</a
                >
                <a
                  @click="showDialog('changeRelationPhoneDialog', true)"
                  v-if="loginType === '2'"
                  >更换联系手机</a
                >
              </div>
            </div>
          </div>
        </el-tabs>
      </div>

      <span slot="reference" class="btn" @click="showPopover">登录</span>

      <div class="other-login-methor">
        <p><i class="icon-weixin-color iconfont"></i>微信</p>
        <p><i class="icon-weibo-color iconfont"></i>微博</p>
        <p><i class="icon-weixin-color iconfont"></i>QQ</p>
      </div>
      <div class="common-popper-footer"></div>
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
      position: absolute;
      cursor: pointer;
      right: 0;
      transform: translate(0px, -20px);
    }
  }

  .sms-btn {
    width: 252px;
    button {
      font-size: 16px;
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
.login-bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  white-space: nowrap;
  a {
    cursor: pointer;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #4b87ff;
    line-height: 14px;
    margin-left: 34px;
  }
}
</style>
