import VueRouter from 'vue-router';
import Landing from './components/home/LandingPage.vue';

const router = new VueRouter({
    routes: [
      { path: '/', component:Landing
      }
    ]
  })
  export default router;