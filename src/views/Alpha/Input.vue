<template>
  <b-container fluid>
    <b-row>
      <b-col md="12" lg="6" xl="4">
        <vessel>
            <vessel-header>Inputs</vessel-header>
            <vessel-body>
                <label>Basic Style</label>
                <input type="text" class="alpha-input">
            </vessel-body>
        </vessel>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Input",
};
</script>
<style lang="scss">
</style>
