import Vue from "vue";

import Router from "vue-router";
import home from "@/view/home";
import tem from "@/view/tem";
import mytem from "@/view/mytem";
import numadd from "@/view/mytem/numadd";
Vue.use(Router);

export default new Router({
  routes: [
    // 当所有的路由路径不匹配的时候会重定到home页面
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/tem",
      name: "tem",
      component: tem,
      redirect: "/tem/draw",
      children: [
        {
          path: "draw",
          component: () => import("@/view/tem/draw")
        },
        {
          path: "recom",
          component: () => import("@/view/tem/recom")
        },
        {
          path: "poster",
          component: () => import("@/view/tem/poster")
        },
        {
          path: "head",
          component: () => import("@/view/tem/head")
        },
        {
          path: "video",
          component: () => import("@/view/tem/video")
        },

        {
          path: "ele",
          component: () => import("@/view/tem/ele")
        }
      ]
    },
    {
      path: "/mytem",
      name: "mytem",
      component: mytem
    },
    {
      path: "/numadd",
      name: "numadd",
      component: numadd
    },
    {
      path: "/*",
      redirect: "/home"
    }
    // {
    //   path: "/self",
    //   name: "self",
    //   // 按需载入，当切换到此组件时才加载此页面
    //   component: () => import("../view/self.vue")
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   // 按需载入，当切换到此组件时才加载此页面
    //   component:() => import('../view/login.vue')

    // },
    // {
    //   path: "/regist",
    //   name: "regist",
    //   // 按需载入，当切换到此组件时才加载此页面
    //   component: () => import("../view/regist.vue")
    // },
  ]
});
