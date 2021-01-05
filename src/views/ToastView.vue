<template>
    <div>
        <!-- <AButton variant="primary" size="lg" type="button" class="mr-3" @click.native="showToastPrimary">Default</Abutton> -->
        <AButton variant="success" size="lg" type="button"  class="mr-3" @click.native="showToastSuccess">Success</Abutton>
        <AButton variant="warning" size="lg" type="button"  class="mr-3" @click.native="showToastWarning">Warning</Abutton>
        <AButton variant="info" size="lg" type="button"  class="mr-3" @click.native="showToastInfo">Info</Abutton>
        <AButton variant="primary" size="lg" type="button"  class="mr-3" @click.native="showToastError">Error</Abutton>
    </div>
</template>

<script>
export default {
    name: "ToastView",
    methods: {
        showToastPrimary : function(){
            this.$toast("I'm a toast!");
        },
        showToastSuccess : function(){
            this.$toast.success("I'm a toast!");
        },
        showToastWarning : function(){
            this.$toast.warning("I'm a toast!");
        },
        showToastInfo : function(){
            this.$toast.info("I'm a toast!");
        },
        showToastError : function(){
            this.$toast.error("I'm a toast!");
        }
    }
  
};
</script>
