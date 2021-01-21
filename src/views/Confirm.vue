<template>
  <b-container fluid>
    <b-row>
      <b-col md="12" lg="6" xl="4">
        <vessel>
          <vessel-header>Confirm Component</vessel-header>
          <vessel-body>
            <b-form-group label="VARIANT TYPE" v-slot="{ ariaDescribedby }">
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="primary" checked="checked">Primary</b-form-radio>
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="success">Success</b-form-radio>
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="info">Info</b-form-radio>
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="warning">Warning</b-form-radio>
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="error">Error</b-form-radio>
            </b-form-group>
            <AButton :variant="selected"  @click.native="showModal">Trigger Confirmation</AButton>
          </vessel-body>
        </vessel>
      </b-col>
      <b-col md="12" lg="6" xl="8">
        <vessel>
          <vessel-header>Confirm Component</vessel-header>
          <vessel-body class="p-5">
            <ul>
              <li><b>Component:</b> Confirmation</li>
              <li><b>Props: </b>
                <ul class="pl-4">
                  <li><b>fontawesome_icon</b>- icon name (e.g. info-circle)</li>
                  <li><b>title</b>- Title of the confirmation box (e.g. Title)</li>
                </ul>
              </li>
              <li><b>Show Confirmation box: </b> Call the following action to display the confirmation box
                <ul  class="pl-4">
                  <li>
                    <pre> this.$store.dispatch('addConfirmation',{
                          variant: 'primary',
                    });</pre>
                    <ul  class="pl-4">
                      <li>variant - type of confirmation message (primary, success, info, warning, error)</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><b>Hide Confirmation box:</b> Call the following action to close the confirmation box
                <ul  class="pl-4">
                    <li>
                      <pre> this.$store.dispatch('removeConfirmation');</pre>
                    </li>
                  </ul>
              </li>
            </ul>  
          </vessel-body>
        </vessel>
      </b-col>
    </b-row>
       <Confirmation fontawesome_icon="info-circle" title="Information">
            <div class="text-center" style="margin-bottom: 20px">
                Are you sure you want to delete this item? 
            </div>
            <div class="text-center">
                <AButton size="lg" :variant="selected" type="button" @click.native="hideModal" class="mr-3">Yes</AButton>
                <AButton  size="lg" type="button" @click.native="hideModal">Cancel</AButton>
            </div>
        </Confirmation>

  </b-container>
</template>
<script>
export default {
  name:"Confirm",
  data(){
    return{
      selected: 'primary'
    }
  },
  methods:{
    showModal:function(){
      this.$store.dispatch('addConfirmation',{
            variant: this.selected,
      });
    },
    hideModal:function(){
      this.$store.dispatch('removeConfirmation');
    },
  }
};
</script>
<style lang="scss">
  ul{
    line-height: 40px;
  }
</style>
