import store from "./store";
/**
 * localStorage缓存
 */
export default class CommonStorage {
  /**
   * 登录form
   */
  static LOGIN_FORM = "LOGIN_FORM";
  /**
   * 缓存数据到 localStorage
   * @param key
   * @param data
   * @param userId
   */
  static setStorageInfo(key: string, data: any, userId?: string) {
    data.userId = userId ? userId : "";
    data.updateTime = new Date().getTime();
    localStorage.setItem(key, JSON.stringify(data));
  }
  static getStorageInfo(key: string) {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) as string)
      : {};
  }
}
