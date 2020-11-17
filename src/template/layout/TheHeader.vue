<template>
  <header></header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss">
@import "../../assets/sass/imports/general";

header {
  width: 100%;
  height: 60px;
  background: white;
  border-top: 2px solid $red;
  border-bottom: 1px solid $gray;

  // -moz-box-shadow: 0 0 20px 8px #9c8128;
  // -webkit-box-shadow: 0 0 20px 8px #9c8128;
  box-shadow: 0 0 20px 8px #d8d8d8;
}
</style>