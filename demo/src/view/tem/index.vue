<template>
  <div>
    <headernav title="喵喵"></headernav>
    <div class="seccontent-box">
      <div class="seccontent">
        <router-link to="/tem/draw" tag="div">作画</router-link>
        <router-link to="/tem/ele" tag="div">ele</router-link>
        <router-link tag="div" to="/tem/head">head</router-link>
        <router-link tag="div" to="/tem/poster">poster</router-link>
        <router-link tag="div" to="/tem/recom">recom</router-link>
        <router-link tag="div" to="/tem/video">video</router-link>
      </div>
    </div>
    <div></div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>
<script>
import headernav from "@/components/header/index.vue";
import tabbar from "../../components/tabber/index.vue";
export default {
  components: { tabbar, headernav },

  return: {
    data() {}
  },
  methods: {}
};
</script>
<style scoped>
.seccontent-box {
  height: 100px;
}
.seccontent {
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  z-index: 200;
  height: 100px;
  line-height: 100px;
  overflow-x: auto;
  white-space: nowrap;
  overflow-y: hidden;
  background: rebeccapurple;
}
.seccontent div {
  width: 200px;
  display: inline-block;
  text-align: center;
}
.seccontent div.router-link-active {
  background: yellow;
}
</style>
