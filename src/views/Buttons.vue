<template>
  <div>
    <div style="text-align: center; margin-top: 10px">
      <AButton method_name="doSomething">NORMAL</AButton>
      <AButton method_name="doSomething" size="sm">SMALL</AButton>
      <AButton method_name="doSomething" size="md">MEDIUM</AButton>
      <AButton method_name="doSomething" size="lg" atype="primary"
        >LARGE</AButton
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import AButton from "../template/components/Button/AButton.vue";
export default {
  name: "TheContainer",
  components: {
    AButton
  },
  methods: {
    doSomething() {
      alert("Hello World");
    }
  }
};
</script>
