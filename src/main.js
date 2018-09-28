import '@babel/polyfill';
import './http';
import './plugins/vuetify';
import App from './App';
import config from './config';
import i18n from './locales';
import router from './router';
import store from './store';
import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage';

Vue.config.productionTip = false;

// you can specify any other name and use it via this.$ls, this.$whatEverYouWant
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true //created computed members from your variable declarations
});

new Vue({
  i18n,
  router,
  store,
  config,
  render: h => h(App)
}).$mount('#app');
