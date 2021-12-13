import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  // 初始化数据
  state: {
    count: 10
  },
  getters: {
    getCount(state) {
      return state.count;
    }
  },
  mutations: {
    addcount(state, num) {
      state.count = state.count + num;
    },
    delcount(state, num) {
      if (state.count > 0) {
        state.count = state.count - num;
      } else {
        state.count = 0;
      }
    }
  },
  actions: {
    getaddcount(context, num) {
      context.commit("addcount", num);
    },
    getdelcount(context, num) {
      context.commit("delcount", num);
    }
  }
});
