<template>
  <el-menu :default-active="activeIndex" class="system-bar" mode="horizontal" @select="handleSelect">
    <system-bar-item v-for="menu in systems" :key="menu.id" :item="menu" />
    <!-- <el-menu-item v-for=""></el-menu-item> -->
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
</template>

<script>
// import  from ''
import SystemBarItem from './SystemBarItem';

export default {
  name: 'SystemBar',
  components: { SystemBarItem },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      systems: [
        {
          id: 'asdasdasd',
          label: '用户中心'
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // eslint-disable-next-line
      console.log(key, keyPath);
    }
  }
};
</script>
