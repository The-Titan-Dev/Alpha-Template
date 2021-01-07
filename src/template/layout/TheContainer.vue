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
    TheFooter
  }
};
</script>

<style lang="scss">
@import "../assets/sass/alpha/container.scss";
</style>
