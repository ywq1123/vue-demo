<template>
  <div>
    <div @click="btn()">你好你好你好</div>
    <div></div>
    <!--  -->
    <div class="box"><div class="center">上下左右居中</div></div>
    <headernav title="喵喵电影"></headernav>
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
  methods: {
    btn() {
      this.$router.push("/mytem");
    }
  }
};
</script>
<style scoped>
.box {
  width: 500px;
  height: 500px;
  background: forestgreen;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center {
  width: 200px;
  height: 200px;
  background: darkcyan;
}
</style>
