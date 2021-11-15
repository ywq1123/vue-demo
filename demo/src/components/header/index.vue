<template>
  <div>
    <div id="header">
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "喵喵电影"
    }
  },
  Date() {
    return {};
  }
};
</script>
<style scoped>
div {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background: salmon;
  line-height: 100px;
  text-align: center;
}
</style>
