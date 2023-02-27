<template>
  <h1 @click="$emit('tabClick', this.num)">{{title}}</h1>
</template>
  
<script>
  export default {
    name: 'NavButton', 
    props: {
      title: String,
      num: Number
    }
  }
</script>
  
<style>  
  h1 {
    padding: 25px;
  }
  
  h1:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>