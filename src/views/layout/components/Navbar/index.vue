<template>
  <el-menu :default-active="defaultIndex" class="navbar" mode="horizontal" @select="handleSelect">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <!-- <breadcrumb /> -->
     <div class="system-menus">
      <system-menu-item v-for="menu in menus" :key="menu.appId" :item="menu" />
      <el-submenu
        index="more"
        class="system-submenu"
        popper-class="system-menu-dropdown"
        v-if="needMore"
      >
        <template slot="title">更多</template>
        <system-menu-item v-for="menu in otherMenus" :key="menu.appId" :item="menu" />
      </el-submenu>
    </div>
    <div class="tools">
      <app-setting class="action-tool"/>
      <notification class="action-tool" />
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="@/assets/avatar.png" class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">LogOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
// import Breadcrumb from '@/components/Breadcrumb';
import SystemMenuItem from '../SystemMenu/SystemMenuItem';
import Notification from './Notification';
import AppSetting from './Setting';
import Hamburger from '@/components/Hamburger';

const MAX_LENGTH = 6;

export default {
  components: {
    // Breadcrumb,
    Hamburger,
    SystemMenuItem,
    AppSetting,
    Notification
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar', 'systems']),
    defaultIndex() {
      const [fristMenu] = this.menus;
      return fristMenu ? fristMenu.appId : null;
    },
    needMore() {
      return this.systems.length > MAX_LENGTH;
    },
    menus() {
      return this.needMore ? this.systems.slice(0, MAX_LENGTH - 1) : this.systems;
    },
    otherMenus() {
      return this.needMore ? this.systems.slice(MAX_LENGTH - 1) : [];
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar');
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    },
    handleSelect(key, keyPath) {
      // eslint-disable-next-line
      console.log('handleSelect', key, keyPath);
    }
  }
};
</script>
