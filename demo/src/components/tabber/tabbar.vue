<template>
  <div id="footer">
    <div class="footer">
      <router-link to="/" tag="div" active-class="red">
          <img src="../../assets/icon/home.png" alt="" />
          <span>首页</span>
      </router-link>
      <router-link to="/tem" tag="div" active-class="red">
          <img src="../../assets/icon/home.png" alt="" />
          <span>模板</span>
      </router-link>
      <router-link to="/mytem" tag="div" active-class="red">
          <img src="../../assets/icon/home.png" alt="" />
          <span>我的设计</span>
      </router-link>
      <router-link to="/self" tag="div" active-class="red">
          <img src="../../assets/icon/home.png" alt="" />
          <span>个人中心</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "footerNav",
  Date() {
    return {};
  },
};
</script>
<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: gainsboro;
}
div {
  width: 24%;
  display: inline-block;
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

.red{
  color: brown;
  }
</style>