<template>
  <el-container class="container">
    <el-aside width="210px" class="aside"><nav-menu /> </el-aside>
    <el-container class="container">
      <el-header>header</el-header>
      <el-main>main</el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { navMenu } from '@/components/nav-menu'
export default defineComponent({
  components: {
    navMenu
  },
  setup() {
    console.log(1)
  }
})
</script>
<style lang="less" scoped>
.aside {
  background-color: #0c2039;
  height: 100%;
}
.container {
  height: 100%;
}
</style>
