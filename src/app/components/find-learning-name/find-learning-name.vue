<template>
  <div class="comp-module">
    <el-dialog
      title="找回新学名"
      width="660px"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      custom-class="common-dialog-login"
      :before-close="handleClose"
      center
    >
      <div>
        <div v-if="!learnName">
          <el-form :model="baseForm" ref="baseForm" :rules="rules">
            <el-form-item label="" prop="phoneNumber">
              <el-input
                type="tel"
                v-model="baseForm.phoneNumber"
                placeholder="联系手机号"
                style="width: 512px"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="verifyCode">
              <div class="flex">
                <el-input
                  type="text"
                  v-model="baseForm.verifyCode"
                  placeholder="手机验证码"
                  style="width: 260px"
                ></el-input>
                <div class="sms-btn">
                  <el-button
                    ref="msgBtn"
                    class="smsCode-button"
                    :disabled="!allowSendMsg"
                    @click="sendMsg($event)"
                    >获取验证码</el-button
                  >
                </div>
              </div>
            </el-form-item>
          </el-form>
          <div style="text-align: center;">
            <el-button type="primary" @click="commit" class="commit-btn">
              确定
            </el-button>
          </div>
        </div>

        <div v-if="learnName" class="get-learnName">
          <p class="get-label">您的新学名是：</p>
          <p class="get-name">中国红楼梦学会</p>
          <el-button type="primary" @click="handleClose" class="commit-btn">
            确定
          </el-button>
        </div>
      </div>
      <div slot="footer"></div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./find-learning-name.ts"></script>
<style lang="scss" scoped>
$color: #333;

.comp-module {
  color: $color;
  font-size: 0.6rem;
}
.common-dialog-login {
  .sms-btn {
    width: 253px;
    button {
      font-size: 22px;
    }
  }
  .get-learnName {
    padding-top: 84px;
    text-align: center;
    .get-label {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #424242;
      line-height: 25px;
      margin-bottom: 43px;
    }
    .get-name {
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #3a3a3a;
      line-height: 45px;
      margin-bottom: 85px;
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
