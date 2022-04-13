<template>
  <div>
    <div style="display:none">显示隐藏不占空间</div>
    <div style="visibility:hidden">显示隐藏占空间</div>
    <h1>计算监听事件</h1>
    <div>{{ message }}</div>
    <div>{{ resermessage() }}</div>
    <h1>class与style的绑定</h1>
    <h3>对象语法</h3>
    <div :class="{ active: isactive, tagg: istagg }">{{ this.content }}</div>
    <h3>数组语法</h3>
    <div :class="[isclass ? 'active' : '', errorclass]"></div>
    <h3>绑定内联样式</h3>
    <div v-for="(item, index) in list" :key="index">
      <div
        :style="{
          color: item.iscolor,
          background: item.isbackground
        }"
      >
        {{ item.box }}
      </div>
      <div>{{ item.num }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          box: "nihao",
          num: 1,
          iscolor: "red",
          isbackground: "#123"
        },
        {
          box: "你好",
          num: 5,
          iscolor: "black",
          isbackground: "#789"
        }
      ],
      message: "nihao",
      isactive: false,
      istagg: false,
      content: 1
    };
  },
  mounted() {
    if (this.content == 1) {
      this.isactive = true;
    } else if (this.content == 2) {
      this.istagg = true;
    }
  },
  methods: {
    resermessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
<style scoped>
.active {
  width: 200px;
  height: 200px;
  background: red;
}
.tagg {
  width: 200px;
  height: 200px;
  background: fuchsia;
}
</style>
