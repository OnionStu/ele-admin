<template>
  <div class="logo-wrapper">
    <a href="#" class="app-logo">Logo</a>
  </div>
</template>
<script>
export default {
  name: 'AppLogo'
};
</script>
<style lang="scss" scoped>
// @import '../../../styles/variables';
$menuItemHeight: 56px;
.logo-wrapper {
  text-align: center;
  height: $menuItemHeight;
  line-height: $menuItemHeight;
  .app-logo {
    font-size: 14px;
    color: #fff;
  }
}
</style>
