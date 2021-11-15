<template>
  <div>
    <headernav title="我的喵喵"></headernav>
    我的设计
    <tabbar></tabbar>
  </div>
</template>

<script>
import headernav from "@/components/header/index.vue";
import tabbar from "@/components/tabber/index.vue";
export default {
  components: { tabbar, headernav },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped></style>
