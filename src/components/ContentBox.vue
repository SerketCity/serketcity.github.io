<template>
  <div class="box">
    <span v-html="contents[active]"></span>
  </div>
</template>
  
<script>
  import content from '../assets/content.json'

  export default {
    name: 'ContentBox',
    props: {
      active: Number
    },
    data() {
      return {
        contents: [
          content.home, 
          content.about, 
          content.projects, 
          content.contact
        ]
      }
    }
  }
</script>
  
<style>
  .box {
    text-align: center;

    padding-left: 10px;
    padding-right: 10px;

    height: 1000px;
  }

  span {
    font-family: "Monaco", monospace;
    font-size: 135%;
    max-width: 100px;
  }

  a {
    color: red;
  }

  li {
    text-align: left;
  }
</style>