export class BaseInfo {
  /**
   * 自动登录 1自动，0不自动 ,
   */
  autoLogin: string = "";
  /**
   * 新学名
   */
  learningName: string = "";
  /**
   * 新联系人
   */
  newLinkerName: string = "";
  /**
   * 新手机号码
   */
  newPhoneNumber: string = "";
  /**
   * 新验证码
   */
  newVerifyCode: string = "";
  /**
   * 密码
   */
  password: string = "";
  /**
   * 确认密码
   */
  passwordCommit: string = "";
  /**
   * 后台获得登录类型：1--personal，2--Org
   */
  personalOrOrg: string = "";
  /**
   * 手机号码
   */
  phoneNumber: string = "";
  /**
   * 注册类型:1个人，2机构
   */
  registType: string = "1";
  /**
   * 业务编号
   */
  sendBizNo: string = "";
  /**
   * 短信类型 1:个人注册 2:机构注册 3：个人登录 4:个人重置密码 5:机构重置密码
   * 6:个人修改密码老手机 7:个人修改密码新手机 8:机构 老手机 9:机构 新手机 10:找回新学名
   */
  sendType: number | string = "";
  /**
   * 单位或社团类型
   */
  type: string = "";
  /**
   * 验证码
   */
  verifyCode: string = "";
  /**
   * 验证类型，1--短信类型，2--图形验证码验证s
   */
  verifyType: string = "1";
  /**
   * 同意协议
   */
  agreement: any[] = [];
}
