<template>
  <el-menu-item :index="item.appId" class="system-menu-item">
    <span>{{item.appName}}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: 'SystemBarItem',
  props: {
    item: { type: Object, required: true }
  }
};
</script>
<style lang="scss" scoped>
.system-bar-item {
  // background-color: #ccc;
}
</style>
