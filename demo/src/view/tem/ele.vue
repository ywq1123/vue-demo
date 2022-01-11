<template>
  <div>
    <child :message="parenrmsg" @childmesage="parentrece"></child>
    <div @click="nihao1()">1212测试点击哦</div>
    <input type="text" v-model="nihao" />
    <p>{{ nihao }}</p>
  </div>
</template>
<script>
import child from "@/components/children.vue";
export default {
  components: { child },
  data() {
    return {
      nihao: "zhehshi",
      parenrmsg: "这是动态绑定"
    };
  },
  methods: {
    parentrece(data) {
      console.log(data);
    },
    nihao1() {
      console.log("ceshi");
    }
  }
};
</script>
<style scoped>
.active {
  color: red;
}
.activeindex {
  color: aqua;
}
</style>
