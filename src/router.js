import VueRouter from 'vue-router';
import Navigation from './components/common/Navigation.vue';

const router = new VueRouter({
    routes: [
      { path: '/', component: Navigation
      }
    ]
  })
  export default router;