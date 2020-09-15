import { IApiConfig } from "../../lib/sg-resource";

// tslint:disable:object-literal-sort-keys
export const apiConfig: IApiConfig = {
  hosts: {
    apiHost: { dir: "" },
  },
  post: {
    // SGV-BUILD-API-POST # NOT DELETE
    login: "",
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
