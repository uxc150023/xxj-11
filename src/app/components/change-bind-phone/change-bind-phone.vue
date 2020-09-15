<template>
  <div class="comp-module">
    <el-dialog
      title="个人更换绑定手机"
      width="660px"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="common-dialog"
      :before-close="handleClose"
      center
    >
      <el-form :model="changeForm" ref="changeForm" :rules="rules">
        <el-form-item label="" prop="phoneNumber">
          <el-input
            type="tel"
            v-model="changeForm.phoneNumber"
            placeholder="请输入旧手机号"
            style="width: 512px"
          ></el-input>
        </el-form-item>

        <el-form-item label="" prop="verifyCode">
          <div class="flex">
            <el-input
              type="text"
              v-model="changeForm.verifyCode"
              placeholder="手机验证码"
              style="width: 260px"
            ></el-input>
            <div class="sms-btn">
              <el-button
                ref="msgBtn"
                class="smsCode-button"
                :disabled="!allowSendMsgOld"
                @click="sendMsg($event, 'old')"
                >获取验证码</el-button
              >
            </div>
          </div>
        </el-form-item>

        <el-form-item label="" prop="phoneNumber">
          <el-input
            type="tel"
            v-model="changeForm.newPhoneNumber"
            placeholder="请输入新手机号"
            style="width: 512px"
          ></el-input>
        </el-form-item>

        <el-form-item label="" prop="verifyCode">
          <div class="flex">
            <el-input
              type="text"
              v-model="changeForm.newVerifyCode"
              placeholder="手机验证码"
              style="width: 260px"
            ></el-input>
            <div class="sms-btn">
              <el-button
                ref="msgBtn"
                class="smsCode-button"
                :disabled="!allowSendMsgNew"
                @click="sendMsg($event, 'new')"
                >获取验证码</el-button
              >
            </div>
          </div>
        </el-form-item>
        <el-button
          type="primary"
          @click="commit('changeForm')"
          class="commit-btn"
          >确定</el-button
        >
      </el-form>
      <div slot="footer"></div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./change-bind-phone.ts"></script>
<style lang="scss" scoped>
$color: #333;
.comp-module {
  color: $color;
  font-size: 0.6rem;
}
.common-dialog {
  .sms-btn {
    width: 253px;
    button {
      font-size: 22px;
    }
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
