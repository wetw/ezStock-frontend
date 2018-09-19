<template>
  <v-app dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" :width="200" clipped enable-resize-watcher fixed app>
      <v-list dense>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
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
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    drawer: true,
    items: [
      { title: 'Home', icon: 'dashboard', to: '/' },
      { title: 'About', icon: 'question_answer', to: '/foo' }
    ],
    miniVariant: true,
  })
}
</script>
