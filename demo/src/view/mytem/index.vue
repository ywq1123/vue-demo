<template>
  <div>
    <headernav title="我的喵喵"></headernav>
    我的设计
    <nav>你好</nav>
    <tabbar></tabbar>
  </div>
</template>

<script>
import headernav from "@/components/header/index.vue";
import tabbar from "@/components/tabber/index.vue";
export default {
  components: { tabbar, headernav },
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {}
};
</script>
<style scoped></style>
