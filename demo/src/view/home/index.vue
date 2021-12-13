<template>
  <div>
    <div class="scrollbox" ref="scrollbox">
      <div class="loader" v-if="isloader"></div>
      <div v-else>
        <headernav style="z-index= 10000" title="喵喵电影"></headernav>
        <div class="box"><div class="center">上下左右居中</div></div>
        <div>{{ count }}</div>
        <div>我是从state里面获取的{{ this.$store.state.count }}</div>
        <div>我是从state里面获取的{{ this.$store.getters.getCount }}</div>
        <div>我是从 ...mapstate拓展上获得的{{ count1 }}</div>
        <div>我是从...mapsetter上获取的{{ getCount }}</div>
        <div @click="add()">+</div>
        <div @click="del()">-</div>

        <div
          style="line-height: 140px;"
          v-for="(item, index) in list"
          :key="index"
        >
          {{ item.content }}
        </div>
      </div>
      <tabbar></tabbar>
    </div>
  </div>
</template>
<script>
import headernav from "@/components/header/index.vue";
import tabbar from "@/components/tabber/index.vue";
import BScroll from "better-scroll";

import { mapState, mapGetters, mapAction } from "vuex";
export default {
  components: { tabbar, headernav },
  data() {
    return {
      isloader: true,
      count: "",
      articleData: [],
      list: [
        { content: "数据" },
        { content: "数据" },
        { content: "数据" },
        { content: "数据" },
        { content: "数据" },
        { content: "数据" },
        { content: "数据" },
        { content: "数据" },
        { content: "数据" }
      ]
    };
  },
  mounted() {
    this.isloader = false;
    console.log("你好");
    // 获取到state里面的count数据
    // this.number = this.$store.state.count;
    this.loadering();
  },
  computed: {
    ...mapState({
      count1: state => state.count
    }),
    ...mapGetters(["getCount"])
  },

  methods: {
    loadering() {
      this.$nextTick(() => {
        let scroll = new BScroll(this.$refs.scrollbox, {
          tap: true,
          probeType: 1
        });
        scroll.on("scroll", pos => {
          if (pos.y > 30) {
            console.log("正在更新");
          }
        });
      });
    },

    add() {
      console.log("加加加");
      // this.$store.commit("addcount", 1);
      this.$store.dispatch("getaddcount", 1);
    },
    del() {
      console.log("减减");
      // this.$store.commit("delcount", 1);
      this.$store.dispatch("getdelcount", 3);
    }
    // 用辅助函数简写
  }
};
</script>
<style lang="less" scoped>
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
// 动画
.loader {
  background: #000;
  background: radial-gradient(#222, #000);
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
}

.loader-inner {
  bottom: 0;
  height: 60px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
}

.loader-line-wrap {
  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  box-sizing: border-box;
  height: 50px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-origin: 50% 100%;
  width: 100px;
}
.loader-line {
  border: 4px solid transparent;
  border-radius: 100%;
  box-sizing: border-box;
  height: 100px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
}
.loader-line-wrap:nth-child(1) {
  animation-delay: -50ms;
}
.loader-line-wrap:nth-child(2) {
  animation-delay: -100ms;
}
.loader-line-wrap:nth-child(3) {
  animation-delay: -150ms;
}
.loader-line-wrap:nth-child(4) {
  animation-delay: -200ms;
}
.loader-line-wrap:nth-child(5) {
  animation-delay: -250ms;
}

.loader-line-wrap:nth-child(1) .loader-line {
  border-color: hsl(0, 80%, 60%);
  height: 90px;
  width: 90px;
  top: 7px;
}
.loader-line-wrap:nth-child(2) .loader-line {
  border-color: hsl(60, 80%, 60%);
  height: 76px;
  width: 76px;
  top: 14px;
}
.loader-line-wrap:nth-child(3) .loader-line {
  border-color: hsl(120, 80%, 60%);
  height: 62px;
  width: 62px;
  top: 21px;
}
.loader-line-wrap:nth-child(4) .loader-line {
  border-color: hsl(180, 80%, 60%);
  height: 48px;
  width: 48px;
  top: 28px;
}
.loader-line-wrap:nth-child(5) .loader-line {
  border-color: hsl(240, 80%, 60%);
  height: 34px;
  width: 34px;
  top: 35px;
}

@keyframes spin {
  0%,
  15% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
