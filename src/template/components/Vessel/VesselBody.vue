<template>
  <div class="vessel__body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VesselBody"
};
</script>

<style lang="scss">
@import "../../assets/sass/imports/general";

.vessel__body {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: block;
  height: auto;
  overflow: auto;
  padding: 15px;
  width: 100%;
}
</style>
