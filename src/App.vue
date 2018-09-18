<template>
  <v-app>
    <v-navigation-drawer persistent permanent :width="200" :mini-variant="miniVariant" :clipped="clipped" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-btn bottom fixed icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'">
        </v-icon>
        <p style="margin-left: 80px; position: absolute;" v-if="!miniVariant">Collapse sidebar</p>
      </v-btn>
    </v-navigation-drawer>
    <v-content>
      <HelloWorld/>
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
  data() {
    return {
      clipped: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      miniVariant: true,
    }
  }
}
</script>
