import HelloWorld from '@/components/HelloWorld';
import Investement from '@/views/InvestementDetails';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const Foo = {
  template: '<div>foo</div>',
};
const Bar = {
  template: '<div>bar</div>',
};

const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
    },
    {
      path: '/bar',
      component: Bar,
    },
    {
      path: '/',
      component: HelloWorld,
    },
    {
      path: '/investmentDetails',
      component: Investement,
    },
  ],
});

router.beforeEach((to, from, next) => {
  global.store.commit('setPageTitle', to.path);
  next();
});

export default router;
