import { BaseService } from "./base.serv";

export interface IWebsiteService {
  // SGV-BUILD-SERVICE-INTERFACE # NOT DELETE
  /**
   * 获取首页图片
   * @param params
   */
  getFirstPageUrl(params: any): Promise<any>;
  /**
   * 上传图片
   * @param params
   */
  uploadFirstPagePic(params: any): Promise<any>;
}

interface IWebsiteServiceConstructor {
  new (): IWebsiteService;
}

export function createWebsiteService(
  ctor: IWebsiteServiceConstructor,
): IWebsiteService {
  return new ctor();
}

export class WebsiteService extends BaseService implements IWebsiteService {
  constructor() {
    super();
  }
  // SGV-BUILD-SERVICE-FUNCTION # NOT DELETE
  public getFirstPageUrl(params: any): Promise<any> {
    return this.proxyHttp.post("getFirstPageUrl", params);
  }
  public uploadFirstPagePic(params: any): Promise<any> {
    const { autoLogin, password, phoneNumber, verifyCode } = params;
    return this.proxyHttp.post("uploadFirstPagePic", {
      autoLogin,
      password,
      phoneNumber,
      verifyCode,
    });
  }
}
