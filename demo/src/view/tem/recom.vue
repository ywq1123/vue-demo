<template>
  <div>
    你好，recome
    <h4>promise是一个构造函数，用来生成promise实例</h4>
  </div>
</template>

<script>
// 构建一个promise函数
// const promise = new Promise(function(resole, reject) {
//   if ("操作成功") {
//     resole(value);
//   } else {
//     reject(error);
//   }
// });
// // 用then指定promise状态回调函数
// promise.then(
//   function(value) {
//     console.log("成功", value);
//   },
//   function(error) {
//     console.log("失败", error);
//   }
// );
export default {
  data() {
    return {};
  },
  // 设置的这只
  mounted() {
    this.promisecase();
  },

  methods: {
    // 简单的一个promise的例子
    promisecase() {
      timeout(100).then(value => {
        console.log(value);
      });
    },
    timeout(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "done");
      });
    },
    created() {
      //
    },
    methods() {}
  }
};
</script>
<style scoped></style>
