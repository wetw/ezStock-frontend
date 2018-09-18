//lang.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

import zhTW from './zh-TW.json';
import enUS from './en-US.json';

Vue.use(VueI18n);

const locale = 'zh-TW';

const messages = {
  'en-US': enUS,
  'zh-TW': zhTW
};

const i18n = new VueI18n({
  /** 默认值 */
  locale,
  messages
});

export default i18n;
