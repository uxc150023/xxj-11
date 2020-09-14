<template>
  <div class="comp-module">
    <el-dialog
      title="更换联系手机"
      width="700px"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="common-dialog"
      :before-close="handleClose"
      center
    >
      <el-form :model="changeForm" ref="changeForm" :rules="rules">
        <el-form-item label="" prop="learningName">
          <el-input
            type="text"
            v-model="changeForm.learningName"
            placeholder="新学名（注册的简称或昵称）"
            size="large"
            style="width: 512px"
          ></el-input>
        </el-form-item>

        <el-form-item label="" prop="phoneNumber">
          <el-input
            type="tel"
            v-model="changeForm.phoneNumber"
            placeholder="原联系手机号"
            size="large"
            style="width: 512px"
          ></el-input>
        </el-form-item>

        <el-form-item label="" prop="verifyCode">
          <div class="flex">
            <el-input
              type="text"
              v-model="changeForm.verifyCode"
              placeholder="手机验证码"
              size="large"
              style="width: 260px"
            ></el-input>
            <div class="sms-btn">
              <el-button
                ref="msgBtn"
                size="large"
                class="smsCode-button"
                :disabled="!allowSendMsgOld"
                @click="sendMsg($event, 'old')"
                >获取验证码</el-button
              >
            </div>
          </div>
        </el-form-item>

        <el-form-item label="" prop="newLinkerName">
          <el-input
            type="text"
            v-model="changeForm.newLinkerName"
            placeholder="新的联系人"
            size="large"
            style="width: 512px"
          ></el-input>
        </el-form-item>

        <el-form-item label="" prop="phoneNumber">
          <el-input
            type="tel"
            v-model="changeForm.newPhoneNumber"
            placeholder="请输入新手机号"
            size="large"
            style="width: 512px"
          ></el-input>
        </el-form-item>

        <el-form-item label="" prop="verifyCode">
          <div class="flex">
            <el-input
              type="text"
              v-model="changeForm.newVerifyCode"
              placeholder="手机验证码"
              size="large"
              style="width: 260px"
            ></el-input>
            <div class="sms-btn">
              <el-button
                ref="msgBtn"
                size="large"
                class="smsCode-button"
                :disabled="!allowSendMsgNew"
                @click="sendMsg($event, 'new')"
                >获取验证码</el-button
              >
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" size="medium" @click="commit('changeForm')"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./change-relation-phone.ts"></script>
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
</style>
