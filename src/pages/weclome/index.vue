<template>
  <div class="tac">
    {{ $route }}
    <p>
      <Button type="primary" @click="goBack">回退</Button>
    </p>
  </div>
</template>

<script setup>
import { Button } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped></style>
