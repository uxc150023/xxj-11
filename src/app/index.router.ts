import Vue from "vue";
import { RouteConfig } from "vue-router";
import VueRouter from "vue-router";
import { ConfigAdapter } from "../lib/sg-resource";
import * as PageFactory from "./pages/factory.page";
Vue.use(VueRouter);
// tslint:disable:object-literal-sort-keys
const routes: RouteConfig[] = [
  // SGV-BUILD-PAGE-ROUTER-CONFIG # NOT DELETE

  {
    path: "/rightview",
    name: "rightview",
    component: PageFactory.rightviewPagePreloading,
  },
  {
    path: "/index",
    name: "index",
    component: PageFactory.indexPagePreloading,
    meta: {
      jurisdiction: true,
    },
    children: [
      // 建站
      {
        path: "/website/:step?",
        name: "website",
        component: PageFactory.websitePagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/home/:tab?",
        name: "home",
        component: PageFactory.homePagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/read",
        name: "read",
        component: PageFactory.readPagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/write",
        name: "write",
        component: PageFactory.writePagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/meeting",
        name: "meeting",
        component: PageFactory.meetingPagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/chair",
        name: "chair",
        component: PageFactory.chairPagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/course",
        name: "course",
        component: PageFactory.coursePagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/personage",
        name: "personage",
        component: PageFactory.personagePagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/alliance",
        name: "alliance",
        component: PageFactory.alliancePagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/presentbook",
        name: "presentbook",
        component: PageFactory.presentbookPagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/contribute",
        name: "contribute",
        component: PageFactory.contributePagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/competition",
        name: "competition",
        component: PageFactory.competitionPagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
      {
        path: "/masterwork",
        name: "masterwork",
        component: PageFactory.masterworkPagePreloading,
        meta: {
          jurisdiction: true,
        },
      },
    ],
  },

  { path: "*", redirect: "login" },
  { path: "/login", name: "login", component: PageFactory.loginPagePreloading },
  {
    path: "/login/:return",
    name: "loginReturn",
    component: PageFactory.loginPagePreloading,
  },
  {
    path: "*",
    redirect: "login",
  },
];
const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  return savedPosition || { x: 0, y: 0 };
};
const { env, sites } = ConfigAdapter.getConfig();
const router = new VueRouter({
  base: sites[env].publicPath,
  mode: "history",
  routes,
  scrollBehavior,
});

export default router;
