<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>    
  </div>
</template>

<script>
import Navigation from './components/common/Navigation.vue'
export default {
  name: 'app',
  components:{Navigation},
  directives: {}
}
</script>

