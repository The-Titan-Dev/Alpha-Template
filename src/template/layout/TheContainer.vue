<template>
  <div>
    <TheHeader></TheHeader>
    <TheSidebar></TheSidebar>
    <TheAside></TheAside>
    <div class="alpha__container">
      <router-view />
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheSidebar from "./TheSidebar.vue";
import TheAside from "./TheAside.vue";
import TheFooter from "./TheFooter.vue";
export default {
  name: "TheContainer",
  components: {
    TheHeader,
    TheSidebar,
    TheAside,
    TheFooter,
  },
};
</script>

<style  lang="scss">
@import "../../assets/sass/imports/general";

.alpha__container {
  background: $container;
  width: 100%;
  min-height: 100vh;
  padding: 100px 30px 30px 30px;
  z-index: 20;
}
</style>
