// SGV-BUILD-PAGE-FAC # NOT DELETE
// 'Personage' PAGE FACTORY START
export function personagePagePreloading(): Promise<any> {
  return import("./personage/personage.vue").catch((error) => {
    return dealOccurred(error, "Personage");
  });
}
// 'Personage' PAGE FACTORY END
// 'Alliance' PAGE FACTORY START
export function alliancePagePreloading(): Promise<any> {
  return import("./alliance/alliance.vue").catch((error) => {
    return dealOccurred(error, "Alliance");
  });
}
// 'Alliance' PAGE FACTORY END
// 'Meeting' PAGE FACTORY START
export function meetingPagePreloading(): Promise<any> {
  return import("./meeting/meeting.vue").catch((error) => {
    return dealOccurred(error, "Meeting");
  });
}
// 'Meeting' PAGE FACTORY END
// 'Chair' PAGE FACTORY START
export function chairPagePreloading(): Promise<any> {
  return import("./chair/chair.vue").catch((error) => {
    return dealOccurred(error, "Chair");
  });
}
// 'Chair' PAGE FACTORY END
// 'Course' PAGE FACTORY START
export function coursePagePreloading(): Promise<any> {
  return import("./course/course.vue").catch((error) => {
    return dealOccurred(error, "Course");
  });
}
// 'Course' PAGE FACTORY END
// 'Write' PAGE FACTORY START
export function writePagePreloading(): Promise<any> {
  return import("./write/write.vue").catch((error) => {
    return dealOccurred(error, "Write");
  });
}
// 'Write' PAGE FACTORY END
// 'Read' PAGE FACTORY START
export function readPagePreloading(): Promise<any> {
  return import("./read/read.vue").catch((error) => {
    return dealOccurred(error, "Read");
  });
}
// 'Read' PAGE FACTORY END
// 'Rightview' PAGE FACTORY START
export function rightviewPagePreloading(): Promise<any> {
  return import("./rightview/rightview.vue").catch((error) => {
    return dealOccurred(error, "Rightview");
  });
}
// 'Rightview' PAGE FACTORY END
// 'Index' PAGE FACTORY START
export function indexPagePreloading(): Promise<any> {
  return import("./index/index.vue").catch((error) => {
    return dealOccurred(error, "Index");
  });
}
// 'Index' PAGE FACTORY END
// 'Home' PAGE FACTORY START
export function homePagePreloading(): Promise<any> {
  return import("./home/home.vue").catch((error) => {
    return dealOccurred(error, "Home");
  });
}
// 'Home' PAGE FACTORY END
// 'Login' PAGE FACTORY START
export function loginPagePreloading(): Promise<any> {
  return import("./login/login.vue").catch((error) => {
    return dealOccurred(error, "Login");
  });
}
// 'Login' PAGE FACTORY END
/**
 * 处理错误
 */
function dealOccurred(error: any, pageName = "") {
  location.href = (window as any).__SWNextFullPath;
}
