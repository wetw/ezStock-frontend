import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App';
import VueLocalStorage from 'vue-localstorage';
import i18n from './locales';
import router from './router';
import store from './store';

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
  render: h => h(App)
}).$mount('#app');
