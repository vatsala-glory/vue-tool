<template>
<div>Button
    <input v-on:click="buttonClicked" type="button" value="Import Excel"/>
</div>
</template>
<script>
export default {
    name: 'tool-btn-1',
    methods:{
        buttonClicked: function(){
            //open the excel browser
        }
    }
}
</script>