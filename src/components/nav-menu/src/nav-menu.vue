<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="" />
      <span>Vue3+TS</span>
    </div>
    <el-menu></el-menu>
  </div>
</template>

<style lang="less" scoped>
.nav-menu {
  .logo {
    height: 25px;
    color: #fff;
    margin: 10px 0;
    text-align: center;
    img {
      height: 100%;
      vertical-align: middle;
      padding-right: 10px;
    }
  }
}
</style>
