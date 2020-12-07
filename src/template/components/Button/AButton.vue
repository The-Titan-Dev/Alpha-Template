<template>
  <button
    :disabled = "disabled"
    class="abtn"
    :class="[
      size ? 'abtn--' + size : '', 
      type ? 'abtn--' + type : '',
      disabled ? 'abtn--' + disabled : '',
      classname
      ]"
    :id="id ? id : ''"
    >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AButton",
  props: {
    onclick: String,
    size: String,
    type: String,
    disabled : Boolean,
    classname : String,
    id : String
  },
  methods: {
    onclick_method() {
      // this.$parent[this.onclick]();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/imports/general";

.abtn {
  border-radius: 5px;
  border-style: none;
  box-shadow: 0 0 5px #646464;
  font-size: 14px;
  margin: 4px;
  overflow: hidden;
  padding: 4px 14px;
  position: relative;
  transition: 0.3s;

  &:hover:enabled {
    transform: scale(1.1);

    span:nth-child(1){
      left: 100%;
      transition: 0.8s;
    }
    span:nth-child(2){
      top: 100%;
      transition: 0.8s;
      transition-delay: 0.2s;
    }
    span:nth-child(3){
      right: 100%;
      transition: 0.8s;
      transition-delay: 0.5s;
    }
    span:nth-child(4){
      bottom: 99%;
      transition: 0.8s;
      transition-delay: 0.7s;
    }
  }

  &:focus{
    outline: 5px auto rgb(212, 212, 212);
  }

  &:disabled{
      box-shadow: 0 0 3px #646464;
  }

  &--sm{
    font-size: 14px;
    padding: 2px 7px;

    span:nth-child(1){
      height: 2px;
      left: -200%;
      position: absolute;
      top: 0%;
      transition: 0.8s;
      transition-delay: 0.7s;
      width: 100px;
    }

    span:nth-child(2){
      height: 100px;
      position: absolute;
      right: 0%;
      top: -450%;
      transition: 0.8s;
      transition-delay: 0.5s;
      width: 2px;
    }
    span:nth-child(3){
      bottom: 0%;
      height: 2px;
      position: absolute;
      right: -200%;
      transition: 0.8s;
      transition-delay: 0.2s;
      width: 100px;
    }
    span:nth-child(4){
      bottom: -450%;
      height: 100px;
      left: 0%;
      position: absolute;
      transition: 0.8s;
      width: 2px;
    }
  }

  &--md {
    font-size: 16px;
    padding: 4px 14px;

    span:nth-child(1){
      height: 2px;
      left: -140%;
      position: absolute;
      top: 0%;
      transition: 0.8s;
      transition-delay: 0.7s;
      width: 100px;
    }

    span:nth-child(2){
      height: 100px;
      position: absolute;
      right: 0%;
      top: -340%;
      transition: 0.8s;
      transition-delay: 0.5s;
      width: 2px;
    }
    span:nth-child(3){
      bottom: 0%;
      height: 2px;
      position: absolute;
      right: -140%;
      transition: 0.8s;
      transition-delay: 0.2s;
      width: 100px;
    }
    span:nth-child(4){
      bottom: -340%;
      height: 100px;
      left: 0%;
      position: absolute;
      transition: 0.8s;
      width: 2px;
    }
  }

  &--lg{
    font-size: 22px;
    padding: 5px 20px;

    span:nth-child(1){
      height: 2px;
      left: -100%;
      position: absolute;
      top: 0%;
      transition: 0.8s;
      transition-delay: 0.7s;
      width: 100px;
    }
    span:nth-child(2){
      height: 100px;
      position: absolute;
      right: 0%;
      top: -250%;
      transition: 0.8s;
      transition-delay: 0.5s;
      width: 2px;
    }
    span:nth-child(3){
      bottom: 0%;
      height: 2px;
      position: absolute;
      right: -100%;
      transition: 0.8s;
      transition-delay: 0.2s;
      width: 100px;
    }
    span:nth-child(4){
      bottom: -250%;
      height: 100px;
      left: 0%;
      position: absolute;
      transition: 0.8s;
      width: 2px;
    }
  }

  &--primary:enabled {
    background: $primary;
    border-color: rgb(224, 224, 224);
    color: rgb(255, 255, 255);

    span:nth-child(1){
       background: linear-gradient(to left, $primary-animate-border, #ffffff00);
    }
    span:nth-child(2){
       background: linear-gradient(to top, $primary-animate-border, #ffffff00);
    }
    span:nth-child(3){
       background: linear-gradient(to right, $primary-animate-border, #ffffff00);
    }
    span:nth-child(4){
       background: linear-gradient(to bottom, $primary-animate-border, #ffffff00);
    }
    &:hover {
      background: $primary-hover;
    }
  }

  &--primary:disabled{
    background: $primary-disabled;
    color: $gray;
  }

  &--success {
    background: $success;
    border-color: rgb(224, 224, 224);
    color: rgb(255, 255, 255);

    span:nth-child(1){
       background: linear-gradient(to left, $success-animate-border, #ffffff00);
    }
    span:nth-child(2){
       background: linear-gradient(to top, $success-animate-border, #ffffff00);
    }
    span:nth-child(3){
       background: linear-gradient(to right, $success-animate-border, #ffffff00);
    }
    span:nth-child(4){
       background: linear-gradient(to bottom, $success-animate-border, #ffffff00);
    }

    &:hover {
      background: $success-hover;
    }
  }

  &--success:disabled{
    background: $success-disabled;
    color: $black;
  }

  &--warning {
    background: $warning;
    border-color: rgb(224, 224, 224);
    color: rgb(48, 47, 42);

    span:nth-child(1){
       background: linear-gradient(to left, $warning-animate-border, #ffffff00);
    }
    span:nth-child(2){
       background: linear-gradient(to top, $warning-animate-border, #ffffff00);
    }
    span:nth-child(3){
       background: linear-gradient(to right, $warning-animate-border, #ffffff00);
    }
    span:nth-child(4){
       background: linear-gradient(to bottom, $warning-animate-border, #ffffff00);
    }

    &:hover {
      background: $warning-hover;
    }
  }

  &--warning:disabled{
    background: $warning-disabled;
    color: $black;
  }

  &--info {
    background: $info;
    border-color: rgb(224, 224, 224);
    color: rgb(255, 255, 255);

    span:nth-child(1){
       background: linear-gradient(to left, $info-animate-border, #ffffff00);
    }
    span:nth-child(2){
       background: linear-gradient(to top, $info-animate-border, #ffffff00);
    }
    span:nth-child(3){
       background: linear-gradient(to right, $info-animate-border, #ffffff00);
    }
    span:nth-child(4){
       background: linear-gradient(to bottom, $info-animate-border, #ffffff00);
    }

    &:hover {
      background: $info-hover;
    }
  }

  &--info:disabled{
    background: $info-disabled;
    color: $black;
  }
  
}

@keyframes slideRight {
  from {
    left: -150%;
  }
  to {
    left: 100%;
  }
}
</style>
