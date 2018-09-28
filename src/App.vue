<template>
  <v-app dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-toolbar-title slot="activator">
          <v-tooltip left>
            <v-icon slot="activator" debounce="200">language</v-icon>
            <span>{{$t("home.changeLang")}}</span>
          </v-tooltip>
        </v-toolbar-title>
        <v-list>
          <v-list-tile v-for="(lang, i) in langs" :key="i" @mouseover="setLang(lang.value)">
            <v-list-tile-action>
              <v-icon v-if="$i18n.locale===lang.value">check</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{ lang.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" :width="200" clipped enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in menu" :key="i" :to="item.href">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t(`menu.${item.title}`)"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content fluid fill-height>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    langs: [
      { title: '繁體中文', value: 'zh-TW' },
      { title: 'English', value: 'en-US' }
    ]
  }),
  methods: {
    setLang(lang) {
      if (lang in this.$i18n.messages) {
        this.$i18n.locale = lang;
      }
      this.$ls.set('locale', lang);
    }
  },
  computed: {
    ...mapState(['menu'])
  }
};
</script>
