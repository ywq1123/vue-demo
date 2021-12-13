<template>
  <div class="scroll" ref="scroll">
    <div v-if="scrollup">{{ message }}</div>
    <div>
      <div class="content" v-for="(item, index) in list" :key="index">
        {{ item.countnum }}
      </div>
    </div>
  </div>
</template>
<script>
import BSroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
      scrollup: false,
      message: "下拉更新",
      list: [
        { countnum: "你好" },
        { countnum: "你好" },

        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },

        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },

        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },

        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" },
        { countnum: "你好" }
      ]
    };
  },
  mounted() {
    this.listscroll();
  },
  methods: {
    listscroll() {
      this.$nextTick(() => {
        let scroll = new BSroll(this.$refs.scroll, {
          tap: true,
          probeType: 1
          // pullUpLoad: {
          //   threshold: 10
          // },
          // pullDownRefresh: {
          //   threshold: 50,
          //   stop: 20
          // }
        });
        scroll.on("scroll", pos => {
          if (pos.y > 30) {
            this.scrollup = true;
          }
          // console.log("刷新");
        });
        scroll.on("touchEnd", pos => {
          if (pos.y > 30) {
            this.scrollup = false;
            this.message = "更新完成";
          }
          //  else {
          //   this.scrollup = false;
          // }
        });
        // scroll.on("pullingDown", pos => {
        //   console.log("下拉刷新");
        //   if (pos > 30) {
        //     this.scrollup = true;
        //   } else {
        //     this.scrollup = false;
        //   }
        // });

        // scroll.on("pullingUp", () => {
        //   console.log("上拉加载更多");
        // });
      });
    }
  }
};
</script>
<style scoped>
.scroll {
  height: 1150px;
  overflow: hidden;
}
.content {
  line-height: 500px;
}
</style>
