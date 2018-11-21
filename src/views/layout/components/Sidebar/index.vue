<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <!-- <div class="menu-wrapper">
        <li class="el-menu-item">
          <a href="/">LOGO</a>
        </li>
      </div> -->
      <app-logo/>
      <system-logo/>
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem';
import AppLogo from './AppLogo';
import SystemLogo from './SystemLogo';

export default {
  components: { SidebarItem, AppLogo, SystemLogo },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>
<style lang="scss" scoped>
$menuItemHeight: 56px;
.logo-wrapper {
  text-align: center;
  height: $menuItemHeight;
  line-height: $menuItemHeight;
  font-size: 14px;
  color: #fff;
}
</style>
