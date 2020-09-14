var __sg_site_config__ = {
  DEV: {
    remote: "g341d04200.wicp.vip",
    otherRemotes: {
      user: "g341d04200.wicp.vip",
    },
    local: "g341d04200.wicp.vip",
    entrance: "http://dev.domain.name:8080/login",
    appID: "xxx",
    protocol: "http:",
    publicPath: "/",
  },
  TEST: {
    remote: "test.domain.name:18080",
    otherRemotes: {
      user: "test.domain.name:18080",
    },
    local: "test.domain.name:8080",
    entrance: "http://test.domain.name:8080/login",
    appID: "xxx",
    protocol: "http:",
    publicPath: "/",
  },
  UAT: {
    remote: "uat.domain.name:18080",
    otherRemotes: {
      user: "uat.domain.name:18080",
    },
    local: "uat.domain.name:8080",
    entrance: "http://uat.domain.name:8080/login",
    protocol: "http:",
    publicPath: "/",
  },
  MASTER: {
    remote: "domain.name:18080",
    otherRemotes: {
      user: "domain.name:18080",
    },
    local: "domain.name:8080",
    entrance: "https://domain.name:8080/login",
    protocol: "https:",
    publicPath: "/",
  },
  runtimes: "DEV",
};
if (typeof global === "object") {
  global.__sg_site_config__ = __sg_site_config__;
}
