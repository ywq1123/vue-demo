<template>
  <div @click="back()">你好，index</div>
</template>
<script>
export default {
  return: {
    data() {}
  },
  methods: {
    back() {
      this.$router.back(-1);
    }
  }
};
</script>
