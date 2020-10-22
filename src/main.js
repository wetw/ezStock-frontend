import '@babel/polyfill';
import './http';
import App from './App';
import config from './config';
import i18n from './locales';
import router from './router';
import store from './store';
import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage';
import vuetify from './plugins/vuetify';

global.store = store;
Vue.config.productionTip = false;

// you can specify any other name and use it via this.$ls, this.$whatEverYouWant
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true, //created computed members from your variable declarations
});

new Vue({
  vuetify,
  i18n,
  router,
  store,
  config,
  render: h => h(App),
}).$mount('#app');
