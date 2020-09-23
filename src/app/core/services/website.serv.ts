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
  /**
   * 只差5分钟 - 提交
   * @param params
   */
  submitMinute(params: any): Promise<any>;
  /**
   * 这款神器 - 查询
   */
  listArtifact(): Promise<any>;
  /**
   * 这款神器 - 保存
   * @param bandContant 内容
   */
  saveArtifact(bandContant: string): Promise<any>;
  /**
   * 学网升级 - 获取新学名号
   * @param params
   */
  upgradeGetMH(params: any): Promise<any>;
  /**
   * 学网升级 - 修改新学名号
   * @param params
   */
  upgradeMH(params: any): Promise<any>;
  /**
   * 学网类型与价格 - 显示价格
   */
  showPrice(): Promise<any>;
  /**
   * 新学名号更新 - 获取新学名号
   * @param params
   */
  modifyGetMH(params: any): Promise<any>;
  /**
   * 新学名号更新 - 更新新学名号
   * @param params
   */
  modifySetMH(params: any): Promise<any>;
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

  public submitMinute(params: any): Promise<any> {
    const { learningAddress, learningNet, model, price, websiteType } = params;
    return this.proxyHttp.post("submitMinute", {
      learningAddress,
      learningNet,
      model,
      price,
      websiteType,
    });
  }

  public listArtifact(): Promise<any> {
    return this.proxyHttp.post("listArtifact", {});
  }

  public saveArtifact(bandContant: string): Promise<any> {
    return this.proxyHttp.post("saveArtifact", { bandContant });
  }

  public upgradeGetMH(params: any): Promise<any> {
    const { model, websiteType } = params;
    return this.proxyHttp.post("upgradeGetMH", {
      model,
      websiteType,
    });
  }

  public upgradeMH(params: any): Promise<any> {
    const { model, websiteType } = params;
    return this.proxyHttp.post("upgradeMH", {
      model,
      websiteType,
    });
  }

  public showPrice(): Promise<any> {
    return this.proxyHttp.post("showPrice", {});
  }

  public modifyGetMH(params: any): Promise<any> {
    const { model, websiteType } = params;
    return this.proxyHttp.post("modifyGetMH", {
      model,
      websiteType,
    });
  }

  public modifySetMH(params: any): Promise<any> {
    const { learningAddress, learningName, learningNet } = params;
    return this.proxyHttp.post("modifySetMH", {
      learningAddress,
      learningName,
      learningNet,
    });
  }
}
