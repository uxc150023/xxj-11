<template>
  <div class="comp-module">
    <el-dialog
      title="找回/重置密码"
      width="660px"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="common-dialog-login"
      :before-close="handleClose"
      center
    >
      <div
        style="margin: auto;margin-bottom: 30px;width: 512px;text-align:right;"
      >
        <el-radio-group v-model="resetType">
          <el-radio-button label="1">个人重置密码</el-radio-button>
          <el-radio-button label="2">机构/社团等重置密码</el-radio-button>
        </el-radio-group>
      </div>

      <el-tabs v-model="resetType" class="login-tabs">
        <el-tab-pane label="" name="1">
          <el-form :model="perForm" ref="perForm" :rules="rules">
            <el-form-item label="" prop="phoneNumber">
              <el-input
                type="tel"
                v-model="perForm.phoneNumber"
                placeholder="请输入个人手机号"
                style="width: 512px"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="verifyCode">
              <div class="flex">
                <el-input
                  type="text"
                  class="border-right-none"
                  v-model="perForm.verifyCode"
                  placeholder="手机验证码"
                  style="width: 260px"
                ></el-input>
                <div class="sms-btn">
                  <el-button
                    ref="msgBtn"
                    class="smsCode-button"
                    :disabled="!allowSendMsgPer"
                    @click="sendMsg($event)"
                    >获取验证码</el-button
                  >
                </div>
              </div>
            </el-form-item>

            <el-form-item label="" prop="password">
              <el-input
                type="password"
                v-model="perForm.password"
                placeholder="请用8-20位数字加字母设置新密码"
                style="width: 512px"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="passwordCommit">
              <el-input
                type="password"
                v-model="perForm.passwordCommit"
                placeholder="请再次输入新密码"
                style="width: 512px"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="" name="2">
          <el-form :model="orgForm" ref="orgForm" :rules="rules">
            <el-form-item label="" prop="learningName">
              <el-input
                type="text"
                v-model="orgForm.learningName"
                placeholder="新学名"
                style="width: 512px"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="phoneNumber">
              <el-input
                type="tel"
                v-model="orgForm.phoneNumber"
                placeholder="联系手机号"
                style="width: 512px"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="verifyCode">
              <div class="flex">
                <el-input
                  type="text"
                  v-model="orgForm.verifyCode"
                  placeholder="手机验证码"
                  style="width: 260px"
                  class="border-right-none"
                ></el-input>
                <div class="sms-btn">
                  <el-button
                    ref="msgBtn"
                    class="smsCode-button"
                    :disabled="!allowSendMsgOrg"
                    @click="sendMsg($event)"
                    >获取验证码</el-button
                  >
                </div>
              </div>
            </el-form-item>

            <el-form-item label="" prop="password">
              <el-input
                type="password"
                v-model="orgForm.password"
                placeholder="请用8-20位数字加字母设置新密码"
                style="width: 512px"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="passwordCommit">
              <el-input
                type="password"
                v-model="orgForm.passwordCommit"
                placeholder="请再次输入新密码"
                style="width: 512px"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <div style="text-align: center;">
          <el-button type="primary" @click="commit" class="commit-btn"
            >确&ensp;定</el-button
          >
        </div>
      </el-tabs>

      <div slot="footer"></div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./find-reset-password.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
}
.login-tabs {
  /deep/ {
    .el-tabs__header {
      display: none;
    }
  }
}
.sms-btn {
  width: 252px;
  button {
    font-size: 16px;
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
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #4b87ff;
    line-height: 14px;
    margin-left: 34px;
  }
}
.commit-btn {
  width: 512px;
  height: 52px;
  margin: 0 auto;

  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 33px;
}
</style>
