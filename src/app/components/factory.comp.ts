// tslint:disable:no-var-requires
import Vue from "vue";

// SGV-BUILD-COMP-FAC # NOT DELETE
Vue.component("register", require("./register/register.vue").default);
Vue.component("login", require("./login/login.vue").default);
Vue.component("nav-menu", require("./nav-menu/nav-menu.vue").default);
Vue.component("headbar", require("./headbar/headbar.vue").default);
Vue.component(
  "AccountSettings",
  require("./account-settings/account-settings.vue").default,
);
