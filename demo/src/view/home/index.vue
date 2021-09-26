<template>
  <div>
    <div @click="btn()">你好</div>
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items,
      activeId: 1,
      activeIndex: 0
    };
  },
  mounted() {
    this.$fetch("/api/v2/movie/top250").then(response => {
      console.log(response);
    });
  },
  methods: {
    show() {
      (a = [1, 2, 3, 4]), (b = toString(a)), console.log(b);
      (c = [3, 4, 5, 6]), console.log(Number(c));
    },
    btn() {
      this.$router.push("/tem");
    }
  }
};
</script>
