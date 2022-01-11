<template>
  <div>
    <h2>子组件的部分</h2>
    <h4>{{ message }}</h4>
    <h5 @click="messagesent()">点击哦，要传输了</h5>
  </div>
</template>
<script>
export default {
  props: ["message"],
  data() {
    return {};
  },
  methods: {
    messagesent() {
      this.$emit("childmesage", "这是子组件的信息传过来啦");
    }
  }
};
</script>
