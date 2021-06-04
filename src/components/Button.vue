<template>
  <button 
    :class="[hide&&'hide']"
    @mouseover="hovering = !hovering" 
    @mouseout="mouseOver()" 
    :style="{
      'font-size': `${fontSize}px`,
      'transition': '.2s ease-in-out all',
      'color': computedColor,
      'background': backgroundColor, 
      'border':`1px solid ${borderColor}`
    }">{{text}}</button>
</template>

<script>
export default {
  name: "Button",
  props:{
    text: String,
    color: String,
    hide: Boolean,
    fontSize: String
  },
  data(){
    return{
      hovering: false
    }
  }, 
  computed: {
    backgroundColor () {
      return this.hovering ? "white" : this.color;
    },
    borderColor () {
      return this.hovering ? this.color: "transparent";
    },
    computedColor() {
      return this.hovering ? this.color: "white";

    }
  },
  methods: {
    mouseOver () {
      this.hovering = !this.hovering
    }
  }
}
</script>
<style lang="scss" scoped>

    button{
      display: inline-block;
      background: #000;
      color: #fff;
      border: 1px solid transparent;
      padding: 10px 20px;
      margin: 5px;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      font-family: inherit;
      font-weight: 500;

      &.hide{
        opacity: 0;
        pointer-events: none;
      }
    }
</style>