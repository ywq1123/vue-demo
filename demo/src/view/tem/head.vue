<template>
  <div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <div class="tit">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </div>

      <div class="content">
        <p v-if="index == 0">内容</p>
        <div v-if="index == 1">1内容</div>
        <div v-if="index == 2">2内容</div>
      </div>
    </van-sidebar>
  </div>
</template>

<script>
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";
import { Notify } from "vant";
Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  data() {
    return {
      activeKey: 0,
      newstring: "",
      newstr: "",
      index: ""
    };
  },
  mounted() {},
  methods: {
    onChange(index) {
      Notify({ type: "primary", message: index });
      this.index = index;
    }
  }
};
</script>
<style lang="less" scoped>
.van-sidebar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .tit {
    width: 20%;
  }
  .content {
    width: 80%;
  }
}
</style>
