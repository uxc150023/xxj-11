import { IApiConfig } from "../../lib/sg-resource";

// tslint:disable:object-literal-sort-keys
export const apiConfig: IApiConfig = {
  hosts: {
    apiHost: { dir: "" },
  },
  post: {
    // SGV-BUILD-API-POST # NOT DELETE
    login: "",
    // ------------------------------------------登录注册------------------------------------------
    // 登录
    loginDo: "apiHost:/xxj/create/login/login",
    // 单位更换联系手机
    changeOrgMobile: "apiHost:/xxj/create/manage/changeOrgMobile",
    // 个人更换绑定手机
    changePersonalMobile: "apiHost:/xxj/create/manage/changePersonalMobile",
    // 单位社团等重置密码
    resetOrgPassword: "apiHost:/xxj/create/manage/resetOrgPassword",
    // 个人重置密码
    resetPersonalPassword: "apiHost:/xxj/create/manage/resetPersonalPassword",
    // 注册 - 个人
    commitPersonalRegister:
      "apiHost:/xxj/create/register/commitPersonalRegister",
    // 注册 - 单位
    commitRegisterOrg: "apiHost:/xxj/create/register/commitOrgRegister",
    // 获取图形验证码
    getPicVerificationCode:
      "apiHost:/xxj/create/register/getPicVerificationCode",
    // 获取验证码
    getVerificationCode: "apiHost:/xxj/create/register/getVerificationCode",
    // 找回新学名
    retrievegLearningName: "apiHost:/xxj/create/manage/retrievegLearningName",
    // -----------------------------------------建站---------------------------------------------
    // 获取首页图片
    getFirstPageUrl: "apiHost:/xxj/create/firstPage/getFirstPageUrl",
    // 首页上传图片
    uploadFirstPagePic: "apiHost:/xxj/create/firstPage/uploadFirstPagePic",
    // 只差5分钟 - 提交
    submitMinute: "apiHost:/xxj/create/minute/submitMinute",
    // 这款神器 - 查询
    listArtifact: "apiHost:/xxj/create/artifact/listArtifact",
    // 这款神器 - 保存
    saveArtifact: "apiHost:/xxj/create/artifact/saveArtifact",
    // 学网升级 - 获取新学名号
    upgradeGetMH: "apiHost:/xxj/create/upgrade/getMH",
    // 学网升级 - 修改新学名号
    upgradeMH: "apiHost:/xxj/create/upgrade/upgradeMH",
    // 学网类型与价格 - 显示价格
    showPrice: "apiHost:/xxj/create/typeModelPrice/showPrice",
    // 新学名号更新 - 获取新学名号
    modifyGetMH: "apiHost:/xxj/create/modify/getMH",
    // 新学名号更新 - 更新新学名号
    modifySetMH: "apiHost:/xxj/create/modify/modify",
  },
  get: {
    // SGV-BUILD-API-GET # NOT DELETE
  },
  put: {
    // SGV-BUILD-API-PUT # NOT DELETE
  },
  delete: {
    // SGV-BUILD-API-DELETE # NOT DELETE
  },
};
