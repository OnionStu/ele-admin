<template>
  <section class="app-main">
    <div class="header">{{pageTitle}}</div>
    <div class="content-wrapper">
      <transition name="fade" mode="out-in">
        <!-- or name="fade-transform" -->
        <router-view class="content"/>
      </transition>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AppMain',
  computed: {
    pageTitle() {
      return this.$route.name || '';
    }
  }
};
</script>

<style  scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
  background-color: #f0f2f5;
}
.header {
  height: 56px;
  padding: 20px;
  background-color: #fff;
}
.content-wrapper {
  padding: 20px;
}
.content {
  background-color: #fff;
  padding: 20px;
}
</style>
