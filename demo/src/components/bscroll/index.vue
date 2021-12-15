<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  props: {
    // 滚动时配发scorll事件
    probeType: {
      type: Number,
      dafault: 1
    },
    // 点击事件
    click: {
      type: Boolean,
      dafault: true
    },
    // 开启横向滚动
    scrollx: {
      type: Boolean,
      default: false
    },
    // 滚动事件
    listenScroll: {
      type: Boolean,
      dafault: false
    },
    // 列表数据
    data: {
      type: Array,
      default: null
    },
    // 上拉加载
    pullup: {
      type: Boolean,
      dafault: false
    },
    // 下拉刷新
    pulldown: {
      type: Boolean,
      default: false
    },
    // 配发列表滚动开始的事件
    beforeScroll: {
      type: Boolean,
      default: false
    },
    // 当数据更新后，刷新scroll数据的延迟
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted() {
    setTimeout(() => {
      this.initscroll();
    }, 20);
  },
  methods: {
    initscroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      // better-scroll
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped></style>
