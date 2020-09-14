<template>
  <div class="comp-module">
    <div class="comp-module-page">
      <div class="comp-left">
        <img src="../../styles/images/logo.png" alt="cchrpp logo" />
        <p>xxx</p>
        <p>yyy</p>
        <p>zzz</p>
      </div>
      <div class="account-box">
        <div class="btn">
          <login
            @showDialog="showDialog"
            @setShowLoginRegister="setShowLoginRegister"
            ref="login"
          ></login>
          <register
            ref="register"
            @setShowLoginRegister="setShowLoginRegister"
          ></register>
        </div>
        <img src="../../styles/images/avatar_boy.png" alt="avatar" />
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            xx<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">账户设置</el-dropdown-item>
            <el-dropdown-item command="e" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div style="position: absolute;">
      <!-- 更换绑定手机 -->
      <change-bind-phone
        :dialogVisible="changeBindPhoneDialog"
        @showDialog="showDialog"
      ></change-bind-phone>

      <!-- 找回重置密码 -->
      <find-reset-password
        :dialogVisible="findResetPswDialog"
        @showDialog="showDialog"
      ></find-reset-password>

      <!-- 找回新学名-->
      <find-learning-name
        :dialogVisible="findLearningNameDialog"
        @showDialog="showDialog"
      ></find-learning-name>

      <!-- 更换联系手机-->
      <change-relation-phone
        :dialogVisible="changeRelationPhoneDialog"
        @showDialog="showDialog"
      ></change-relation-phone>
    </div>
  </div>
</template>
<script lang="ts" src="./headbar.ts"></script>
<style lang="scss" scoped>
$color: #333;
.comp-module-page {
  height: 46px;
  position: relative;
  background: linear-gradient(90deg, #59ade7 0%, #5145ec 100%);
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 9;
  .comp-left {
    display: flex;
    align-items: center;
    img {
      width: 66px;
      height: 28px;
      margin-right: 8px;
    }
    p {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ffffff;
      margin-right: 30px;
      cursor: pointer;
    }
  }
  h1 {
    float: left;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: PingFang-SC-Bold;
    font-size: 20px;
    color: #9ba3aa;
    letter-spacing: 0;
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    padding: 0 0 0 11px;
    &::before {
      content: "";
      position: absolute;
      top: 5px;
      left: 0;
      display: inline-block;
      height: 20px;
      border-left: 1px solid #6d6f70;
    }
  }
  .account-box {
    display: flex;
    align-items: center;
    .btn {
      display: flex;
      button {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
    }
    img {
      width: 32px;
      height: 32px;
      float: left;
      border-radius: 16px;
    }
    .el-dropdown {
      float: left;
      margin: 0 30px 0 14px;
      line-height: 32px;
      cursor: pointer;
    }
  }
  .el-dropdown-link {
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    color: #c6cfda;
    letter-spacing: 0;
  }
}
</style>
