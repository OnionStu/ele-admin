import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import '@/plugins/icons';
// import '@/permission';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import './plugins/element.js';
import '@/styles/index.scss'; // global css

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
