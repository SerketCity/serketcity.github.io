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
    padding: 28px;

    font-family: "Lucida Console", monospace;
    user-select: none;

    transition: color 0.15s;
  }
  
  h1:hover {
    cursor: pointer;
    color: white;
    text-shadow: 2px;

    animation: shake 1s;
    animation-iteration-count: infinite;
  }

  h1:active {
    cursor: pointer;
    color: red;
    animation: shrink 0.1s;
    animation-fill-mode: forwards;
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -1px) rotate(-1deg); }
  }

  @keyframes shrink {
    0% {transform: scale(1); }
    100% {transform: scale(0.9); }
  }
</style>