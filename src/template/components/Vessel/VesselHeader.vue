<template>
  <div class="vessel__header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VesselHeader"
};
</script>

<style lang="scss">
@import "../../assets/sass/imports/general";

.vessel__header {
  border-bottom: 1px solid $gray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: block;
  height: auto;
  font-family: PoppinsSemiBold;
  font-size: 20px;
  overflow: auto;
  padding: 15px;
  width: 100%;
}
</style>
