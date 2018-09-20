import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App';
import i18n from './locales';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
