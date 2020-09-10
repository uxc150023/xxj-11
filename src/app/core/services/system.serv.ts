import { BaseService } from "./base.serv";

export interface ISystemService {
  // SGV-BUILD-SERVICE-INTERFACE # NOT DELETE
  login(userName: string, password: string): Promise<any>;
  loginDo(params: any): Promise<any>;
  backLearningName(params: any): Promise<any>;
  changeOrgMobile(params: any): Promise<any>;
  commitRegiste(params: any): Promise<any>;
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
    const {
      autoLogin,
      learningName,
      newLinkerName,
      newPhoneNumbe,
      newVerifyCode,
      password,
      passwordCommit,
      personalOrOrg,
      phoneNumber,
      registType,
      sendBizNo,
      sendType,
      type,
      verifyCode,
      verifyType,
    } = params;
    return this.proxyHttp.post("loginDo", {
      autoLogin,
      learningName,
      newLinkerName,
      newPhoneNumbe,
      newVerifyCode,
      password,
      passwordCommit,
      personalOrOrg,
      phoneNumber,
      registType,
      sendBizNo,
      sendType,
      type,
      verifyCode,
      verifyType,
    });
  }
  public commitRegiste(params: any): Promise<any> {
    const {
      autoLogin,
      learningName,
      newLinkerName,
      newPhoneNumbe,
      newVerifyCode,
      password,
      passwordCommit,
      personalOrOrg,
      phoneNumber,
      registType,
      sendBizNo,
      sendType,
      type,
      verifyCode,
      verifyType,
    } = params;
    return this.proxyHttp.post("commitRegiste", {
      autoLogin,
      learningName,
      newLinkerName,
      newPhoneNumbe,
      newVerifyCode,
      password,
      passwordCommit,
      personalOrOrg,
      phoneNumber,
      registType,
      sendBizNo,
      sendType,
      type,
      verifyCode,
      verifyType,
    });
  }
  public backLearningName(params: any): Promise<any> {
    return this.proxyHttp.post("backLearningName", params);
  }
  public changeOrgMobile(params: any): Promise<any> {
    return this.proxyHttp.post("changeOrgMobile", params);
  }
}
