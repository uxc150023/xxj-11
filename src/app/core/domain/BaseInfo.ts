export class BaseInfo {
  autoLogin: string = ""; // 1自动，0不自动 ,
  learningName: string = ""; // 新学名
  newLinkerName: string = ""; //  新联系人
  newPhoneNumber: string = ""; // 新手机号码
  newVerifyCode: string = ""; // 新验证码
  password: string = ""; // 密码
  passwordCommit: string = ""; // 确认密码
  personalOrOrg: string = ""; // 后台获得登录类型：1--personal，2--Org
  phoneNumber: string = ""; // 手机号码
  registType: string = "1"; // 注册类型:1个人，2机构
  sendBizNo: string = ""; // 业务编号
  sendType: number | string = ""; // 短信类型，验证码[101:个人]，通知 ,
  type: string = ""; // 单位或社团类型
  verifyCode: string = ""; // 验证码
  verifyType: string = "1"; // 验证类型，1--短信类型，2--图形验证码验证
  agreement: any[] = []; // 同意协议s
}
