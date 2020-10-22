import config from './config';
import Vue from 'vue';
import VueConfigManager from 'vue-config-manager';

Vue.use(VueConfigManager, {
  defautl: config,
});
export default VueConfigManager;
