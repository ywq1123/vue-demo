<template>
  <div id="footer" class="footer-box">
    <div class="footer">
      <router-link to="/home" tag="div">
        <img src="../../assets/pict.png" alt="" />
        <span>首页</span>
      </router-link>
      <router-link to="/tem" tag="div">
        <img src="../../assets/pict.png" alt="" />
        <span>模板</span>
      </router-link>
      <router-link to="/mytem" tag="div">
        <img src="../../assets/pict.png" alt="" />
        <span>我的设计</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  Date() {
    return {};
  }
};
</script>
<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: rgb(220, 220, 220);
  display: flex;
  justify-content: space-around;
}
div {
  width: 33%;
}
img {
  display: block;
  width: 20px;
  height: 20px;
  margin: 10px auto;
}
span {
  display: block;
  text-align: center;
}

div.router-link-active {
  color: brown;
}
</style>
