export const LOGIN_INFO = "LOGIN_INFO";

export const AVATAR = {
  account: require("../styles/images/avatar.png"),
  boy: require("../styles/images/avatar_boy.png"),
  girl: require("../styles/images/avatar_girl.png"),
};

// des 加密密钥
export const DES_PSD_KEY = "ou0zURXJiiEnJof81zkrebliTnhw";
export const DES_NORMAL_KEY =
  "ABCDEFGHIJKLMNOPQRSTWdefghijklmnopqrstwxyz123456789";

export const ast_Key = () => {
  const b = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
    ["l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ];
  const a = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
};
const aa = name();
function name(...args: any[]) {}

export enum DynamiType {
  /**
   * xx
   */
  HOSPITAL_DYNAMIC_DEPARTMENT = "hospital_dynamic_department",
}

export enum InfoType {
  /**
   * 文本框
   */
  Text = 1,
  /**
   * 多行文本框
   */
  Textarea,
  /**
   * 地址
   */
  Address,
  /**
   * 邮箱
   */
  Email,
  /**
   * 手机
   */
  Mobile,
  /**
   * 网址
   */
  Website,
  /**
   * 富文本
   */
  Richtext,
  /**
   * 多图
   */
  MultiImage,
  Video,
  Date,
  Select,
  MultiSelect,
  Image,
}

/**
 * 身份
 */
export enum Identity {
  /**
   * xx
   */
  Institution = "1",
  /**
   * yy
   */
  Ethic = "2",
  /**
   * zz
   */
  Genetics = "3",
}

/**
 * 角色身份
 */
export enum RoleIdentity {
  Site = 1,
  Sponsor = 2,
  Researcher = 3,
}
/**
 * 正则规则
 */
export const PATTERN_REG = {
  email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  mobile: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
  phone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
  safePassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/,
};
