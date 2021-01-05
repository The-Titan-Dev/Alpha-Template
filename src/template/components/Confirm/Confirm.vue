<template>
  <div class="confirm">
    <div class="confirmation__box">
        <div class="confirmation__box__icon">
            
        </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Confirm",
  props: {
    variant: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/imports/general";
.confirm {
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
}

.confirmation__box {
  background: white;
  border-top:3px solid $prime;


  width: 500px;
  height: 200px;
}
</style>