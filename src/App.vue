<template>
  <v-app dark>
    <v-app-bar app fixed clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{$t(`menu.${pageTitle}`)}}</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon debounce="200">language</v-icon>
            <!-- <span>{{$t("home.changeLang")}}</span> -->
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(lang, i) in langs" :key="i" @click="setLang(lang.value)">
            <v-list-item-action>
              <v-icon v-if="$i18n.locale===lang.value">check</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ lang.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :width="205" clipped app>
      <v-list>
        <v-list-item v-for="(item, i) in menu" :key="i" :to="item.href">
          <v-list-item-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t(`menu.${item.title}`)"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content fluid fill-height>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

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
    ...mapState(['pageTitle']),
    ...mapGetters(['menu'])
  }
};
</script>
