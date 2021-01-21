<template>
    <div>
        <div class="confirm" :class="typeVariantConfirm" v-for="notification in getConfirmation" :key="notification.id">
            <div class="confirmation__box" :class="typeVariantConfirmationBox">
                <div class="confirmation__box__icon">
                     <font-awesome-icon v-if="fontawesome_icon" :icon="fontawesome_icon" />
                     {{title}}
                </div>
                <div class="confirmation__box__content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {mapGetters} from 'vuex';
export default {
    name: "Confirmation",
    computed: {
        ...mapGetters(['getConfirmation']),
        typeVariantConfirm(){
            return (this.getConfirmation[0].variant!=undefined)? `confirm--${this.getConfirmation[0].variant}` : '';
        },
        typeVariantConfirmationBox(){
            return (this.getConfirmation[0].variant!=undefined)? `confirmation__box--${this.getConfirmation[0].variant}` : '';
        }
    },
    props:{
        fontawesome_icon : String,
        title : String
    }
}
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
    transition: 1s ease-in-out;
    z-index: 100;

  &--primary{
    background: rgb(164 146 146 / 40%);
  }

  &--success{
      background: rgb(131 154 138 / 40%);
  }

   &--info{
      background: rgb(164 169 196 / 40%);
  }

  &--warning{
      background: rgb(170 168 130 / 40%);
  }

  &--error{
      background: rgb(41 41 40 / 40%);
  }
}

.confirmation__box {
    background: white;
    padding:10px;
    width: 500px;
    transition: 1s;
    animation: fadeIn .5s;
    
    &--primary{ 
        border-top: 7px solid $red;
    }

    &--success{ 
        border-top: 7px solid $success;
    }

    &--info{ 
        border-top: 7px solid $info;
    }

    &--warning{ 
        border-top: 7px solid $warning;
    }

    &--error{ 
        border-top: 7px solid $error;
    }

    .confirmation__box__content
    {
        font-size: 20px;
        padding-top: 30px;
    }

    .confirmation__box__icon
    {
        border-bottom: 3px solid $gray;
        font-size: 23px;
        font-weight: bold;
    }

}


@keyframes fadeIn {
    from {
        transform: scale(0,0);
    }
    to {
        transform: scale(1,1);
    }
}

</style>