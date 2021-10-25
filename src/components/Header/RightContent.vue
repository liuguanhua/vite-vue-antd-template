<template>
  <div class="header-right">
    <a-dropdown placement="bottomRight">
      <span class="account-avatar">
        <Avatar
          size="small"
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          class="header-avatar"
        />
        <span>user</span>
      </span>
      <template v-slot:overlay>
        <a-menu class="drop-down menu" :selected-keys="[]">
          <a-menu-item key="center">
            <router-link to="/weclome">欢迎</router-link>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup>
import { Avatar } from 'ant-design-vue'
</script>

<style lang="scss" scoped>
.header-right {
  float: right;
  margin-right: 22px;
  padding: 0 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(#000, 0.025);
  }
}
.account-avatar {
  display: block;
  height: 100%;
  .header-avatar {
    margin-right: 8px;
  }
}
</style>
