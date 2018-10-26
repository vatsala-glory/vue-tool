<template> 
  <div>
     <div>
    <h5 class="center-align">BI-Tooling App</h5>
  </div>
    <tool-btn-1></tool-btn-1>
  </div> 
</template>

<script>
import Button from '../utility/Button.vue'
export default {
  name: "landing",
   components:{
     'tool-btn-1': Button
     },
};
</script>