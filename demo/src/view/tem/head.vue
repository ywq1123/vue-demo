<template>
  <div>
    你好，poster 标题
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
    <h1>1111{{ newstr }}</h1>
  </div>
</template>

<script>
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  data() {
    return {
      activeKey: 0,
      newstring: "",
      newstr: ""
    };
  },
  mounted() {
    this.stringcall("153146");
  },
  methods: {
    // 字符串去重
    stringcall(str) {
      var newstr = "";
      for (let i = 0; i <= str.length; i++) {
        if (newstr.indexOf(str[i]) == -1) {
          newstr += str[i];
        }
      }
      return newstr;
    }
  }
};
</script>
<style scoped></style>
