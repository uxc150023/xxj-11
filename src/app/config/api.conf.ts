import { IApiConfig } from "../../lib/sg-resource";

// tslint:disable:object-literal-sort-keys
export const apiConfig: IApiConfig = {
  hosts: {
    apiHost: { dir: "" },
  },
  post: {
    // SGV-BUILD-API-POST # NOT DELETE
    loginDo: "apiHost:/xxj/create/login/login",
    orgLogin: "apiHost:/xxj/create/login/orgLogin",
    personalLogin: "apiHost:/xxj/create/login/personalLogin",
    backLearningName: "apiHost:/xxj/create/manage/backLearningName",
    changeOrgMobile: "apiHost:/xxj/create/manage/changeOrgMobile",
    changePersonalMobile: "apiHost:/xxj/create/manage/changePersonalMobile",
    resetOrgPassword: "apiHost:/xxj/create/manage/resetOrgPassword",
    // 个人重置密码
    resetPersonalPassword: "apiHost:/xxj/create/manage/resetPersonalPassword",
    // 发送短信
    commitRegiste: "apiHost:/xxj/create/register/commitRegiste",
    getPicVerificationCode:
      "apiHost:/xxj/create/register/getPicVerificationCode",
    getVerificationCode: "apiHost:/xxj/create/register/getVerificationCode",
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
