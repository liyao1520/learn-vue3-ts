<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="" />
      <span>Vue3+TS</span>
    </div>
    <el-menu background-color="#0c2039" text-color="#fff" unique-opened router>
      <template v-for="item in userMenu" :key="item.id + ''">
        <el-submenu v-if="item.type === 1" :index="item.id + ''">
          <!--标题 -->
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>

          <!-- 子菜单 -->
          <template v-for="i in item.children" :key="i.key">
            <el-submenu v-if="i.type === 1" :index="i.id + ''">
              <template #title>
                <i :class="i.icon"></i>
                <span>{{ i.name }}</span>
              </template>
            </el-submenu>
            <el-menu-item
              v-else
              :index="i.id + ''"
              @click="handleMenuItemClick(i)"
            >
              <template #title>
                <i :class="i.icon"></i>
                <span>{{ i.name }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item
          v-else
          :index="item.id"
          @click="handleMenuItemClick(item)"
        >
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const userMenu = ref(store.state.loginModule.userMenu)
    const handleMenuItemClick = (item: any) => {
      const path = item.url ?? '/404'
      router.push(path)
    }
    return {
      userMenu,
      handleMenuItemClick
    }
  }
})
</script>

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
