import enUS from './en-US.json';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhTW from './zh-TW.json';

Vue.use(VueI18n);

const messages = {
  'en-US': enUS,
  'zh-TW': zhTW
};

const i18n = new VueI18n({
  /** 默认值 */
  locale: window.localStorage.getItem('locale') ||  'en-US',
  messages
});

export default i18n;
