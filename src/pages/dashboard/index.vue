<template>
  <div class="tac">
    <img :src="src" alt="" />
    <h1 class="title">
      <router-link to="/weclome"> WECLOME </router-link>
    </h1>
    <Button danger @click="decrement">减</Button>
    {{ count }}
    <Button type="primary" @click="increment">增</Button>
    <div style="margin-top: 10px">
      <Button type="dashed" @click="onRandomColor(INIT_MAIN_BG_COLOR)">
        重置背景色
      </Button>
      {{ mainBgColor }}
      <Button type="primary" ghost @click="onRandomColor()">
        随机背景色
      </Button>
    </div>
    <HelloWorld msg="" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { Button } from 'ant-design-vue'

import src from '@/assets/images/logo.png'
import { INIT_MAIN_BG_COLOR } from '@/utils'

import HelloWorld from '@/components/HelloWorld.vue'

const { state, dispatch, commit } = useStore()

const { global } = state
const { mainBgColor } = toRefs(global)
const count = ref(0)

const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}

function generateColor() {
  return '#' + Math.random().toString(16).substr(2, 6)
}

const onRandomColor = (color?: string) => {
  commit('global/updateState', {
    mainBgColor: color || generateColor(),
  })
}
</script>

<style lang="scss" scoped>
.title {
  color: $primary-color;
}
</style>
