<template>
  <div class="vessel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Vessel"
};
</script>

<style lang="scss">
@import "../../assets/sass/imports/general";

.vessel {
  background: white;
  border-radius: 10px;
  color: $black;
}
</style>
