<template>
  <div>
    <div style="margin: 10px;">
      <h1>INITIAL DESIGN AND COLOR</h1>
      <div>
        <span style="margin-right: 10px;"><b>DEFAULT</b></span>
        <AButton onclick="doSomething">NORMAL</AButton>
        <AButton onclick="doSomething" size="sm">SMALL</AButton>
        <AButton onclick="doSomething" size="md">MEDIUM</AButton>
        <AButton onclick="doSomething" size="lg">
        LARGE
        </AButton>
      </div>
      <div>
        <span style="margin-right: 10px;"><b>PRIMARY</b></span>
        <AButton onclick="doSomething" type="primary">NORMAL</AButton>
        <AButton onclick="doSomething" size="sm" type="primary">SMALL</AButton>
        <AButton onclick="doSomething" size="md" type="primary">MEDIUM</AButton>
        <AButton onclick="doSomething" size="lg" type="primary">
        LARGE
        </AButton>
      </div>
      <div>
        <span style="margin-right: 10px;"><b>SUCCESS</b></span>
        <AButton onclick="doSomething" type="success">NORMAL</AButton>
        <AButton onclick="doSomething" size="sm" type="success">SMALL</AButton>
        <AButton onclick="doSomething" size="md" type="success">MEDIUM</AButton>
        <AButton onclick="doSomething" size="lg" type="success">
        LARGE
        </AButton>
      </div>
      <div>
        <span style="margin-right: 10px;"><b>INFO</b></span>
        <AButton onclick="doSomething" type="info">NORMAL</AButton>
        <AButton onclick="doSomething" size="sm" type="info">SMALL</AButton>
        <AButton onclick="doSomething" size="md" type="info">MEDIUM</AButton>
        <AButton onclick="doSomething" size="lg" type="info">
        LARGE
        </AButton>
      </div>
      <br>
      <label>Button Props</label>
      <br>
      <label style="font-weight: bold">size : </label>
      <label>sm md lg</label>
      <br>
      <label style="font-weight: bold">type : </label>
      <label>primary warning info success</label>
       <br>
      <label style="font-weight: bold">onclick : </label>
      <label>your_method_name</label>
    </div>
  </div>
</template>

<script>
import AButton from "../template/components/Button/AButton.vue";
export default {
  name: "Buttons",
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


