<template>
  <a-layout style="min-height: 100vh" id="app-container">
    <a-layout-sider
      theme="dark"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item v-for="item in menuData" :key="item.path">
          <router-link class="menu-item-link" :to="item.path">
            <component :is="item.icon" />
            <span>{{ item.title }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="`background: ${mainBgColor}; padding: 0`">
        <component
          class="trigger"
          @click="collapsed = !collapsed"
          :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined"
        />
        <RightContent />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: mainBgColor,
          minHeight: '280px',
        }"
      >
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref, watchEffect, onMounted, watch, toRefs } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import RightContent from '@/components/Header/RightContent.vue'

import routes from '@/router/routes'

const menuData = routes.filter((item) => !item.hideInMenu)
const route = useRoute()
const router = useRouter()
const { state } = useStore()

const { mainBgColor } = toRefs(state.global)
const collapsed = ref(false)
const selectedKeys = ref([])

const changeSelectedKeys = () => {
  if (route.path) {
    selectedKeys.value = [route.path]
  }
}

watch(() => route.path, changeSelectedKeys)

onMounted(() => {
  router.isReady().then(changeSelectedKeys)
})
</script>

<style lang="scss" scoped>
.menu-item-link {
  color: rgba(#fff, 0.65);
  &:hover {
    color: #fff;
  }
}
</style>
