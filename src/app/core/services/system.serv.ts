import { BaseService } from "./base.serv";

export interface ISystemService {
  // SGV-BUILD-SERVICE-INTERFACE # NOT DELETE
  login(userName: string, password: string): Promise<any>;
  /**
   * 登录
   * @param params
   */
  loginDo(params: any): Promise<any>;
  /**
   * 单位更换联系手机
   * @param params
   */
  changeOrgMobile(params: any): Promise<any>;
  /**
   * 注册 - 个人
   * @param params
   */
  commitPersonalRegister(params: any): Promise<any>;
  /**
   * 注册 - 单位
   * @param params
   */
  commitRegisterOrg(params: any): Promise<any>;
  /**
   * 获取验证码
   * @param params
   */
  getVerificationCode(params: any): Promise<any>;
  /**
   * 获取图形验证码
   * @param params
   */
  getPicVerificationCode(params: any): Promise<any>;
  /**
   * 个人重置密码
   * @param params
   */
  resetPersonalPassword(params: any): Promise<any>;
  /**
   * 单位社团等重置密码
   * @param params
   */
  resetOrgPassword(params: any): Promise<any>;
  /**
   * 个人更换绑定手机
   * @param params
   */
  changePersonalMobile(params: any): Promise<any>;
  /**
   * 找回新学名
   * @param params
   */
  retrievegLearningName(params: any): Promise<any>;
}

type ISystemServiceConstructor = new () => ISystemService;

export function createSystemService(
  ctor: ISystemServiceConstructor,
): ISystemService {
  return new ctor();
}

export class SystemService extends BaseService implements ISystemService {
  constructor() {
    super();
  }
  // SGV-BUILD-SERVICE-FUNCTION # NOT DELETE
  public login(userName: string, password: string): Promise<any> {
    return this.proxyHttp.post("login", { userName, password });
  }
  public loginDo(params: any): Promise<any> {
    const { autoLogin, password, phoneNumber, verifyCode } = params;
    return this.proxyHttp.post("loginDo", {
      autoLogin,
      password,
      phoneNumber,
      verifyCode,
    });
  }
  public commitPersonalRegister(params: any): Promise<any> {
    const {
      password,
      passwordCommit,
      phoneNumber,
      verifyCode,
      verifyType,
    } = params;
    return this.proxyHttp.post("commitPersonalRegister", {
      password,
      passwordCommit,
      phoneNumber,
      verifyCode,
      verifyType,
    });
  }
  public commitRegisterOrg(params: any): Promise<any> {
    const {
      learningName,
      password,
      passwordCommit,
      phoneNumber,
      type,
      verifyCode,
      verifyType,
    } = params;
    return this.proxyHttp.post("commitRegisterOrg", {
      learningName,
      password,
      passwordCommit,
      phoneNumber,
      type,
      verifyCode,
      verifyType,
    });
  }
  public changeOrgMobile(params: any): Promise<any> {
    const {
      phoneNumber,
      verifyCode,
      newVerifyCode,
      newPhoneNumber,
      newLinkerName,
    } = params;
    return this.proxyHttp.post("changeOrgMobile", {
      newLinkerName,
      newPhoneNumber,
      newVerifyCode,
      phoneNumber,
      verifyCode,
    });
  }

  public getVerificationCode(params: any): Promise<any> {
    const { phoneNumber, sendType } = params;
    return this.proxyHttp.post("getVerificationCode", {
      phoneNumber:
        params.sendType === "7" ? params.newPhoneNumber : params.phoneNumber,
      sendType,
    });
  }
  public getPicVerificationCode(params: any): Promise<any> {
    const { phoneNumber } = params;
    return this.proxyHttp.post("getPicVerificationCode", {
      phoneNumber,
    });
  }

  public resetPersonalPassword(params: any): Promise<any> {
    const { phoneNumber, verifyCode, password, passwordCommit } = params;
    return this.proxyHttp.post("resetPersonalPassword", {
      password,
      passwordCommit,
      phoneNumber,
      verifyCode,
    });
  }

  public resetOrgPassword(params: any): Promise<any> {
    const {
      phoneNumber,
      verifyCode,
      password,
      passwordCommit,
      learningName,
    } = params;
    return this.proxyHttp.post("resetOrgPassword", {
      learningName,
      password,
      passwordCommit,
      phoneNumber,
      verifyCode,
    });
  }

  public changePersonalMobile(params: any): Promise<any> {
    const { phoneNumber, verifyCode, newVerifyCode, newPhoneNumber } = params;
    return this.proxyHttp.post("changePersonalMobile", {
      newPhoneNumber,
      newVerifyCode,
      phoneNumber,
      verifyCode,
    });
  }

  public retrievegLearningName(params: any): Promise<any> {
    const { phoneNumber, verifyCode } = params;
    return this.proxyHttp.post("retrievegLearningName", {
      phoneNumber,
      verifyCode,
    });
  }
}
