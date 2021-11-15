// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";
import App from "./App";
import router from "./router";
// 引入lib-flexible使页面px转rem
import "lib-flexible";
// 引入echart
import * as echarts from "echarts";
// import { post, fetch, patch, put } from "./utils/http";
// 引入axios
import axios from "axios";
import { TreeSelect } from "vant";
Vue.use(TreeSelect);
Vue.use(Sidebar);
Vue.use(SidebarItem);
// 将vue改为vue的原型链就可以在组件中使用axios了
Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
//定义全局变量
// Vue.prototype.$post = post;
// Vue.prototype.$fetch = fetch;
// Vue.prototype.$patch = patch;
// Vue.prototype.$put = put;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
