// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";
import App from "./App";
import router from "./router";
import store from "./store/store";
import less from "less";
// 引入lib-flexible使页面px转rem
import "lib-flexible";
// 引入echart
import * as echarts from "echarts";
// import { post, fetch, patch, put } from "./utils/http";
// 引入axios
import axios from "axios";

Vue.use(Vuex);
Vue.use(less);
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
  store,
  components: { App },
  template: "<App/>"
});
