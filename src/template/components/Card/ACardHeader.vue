<template>
    <div class="acards__title" :class="classname" :id="id">
        <div class="acards__icon" :class="type? 'acards__icon--' + type : ''">
            <font-awesome-icon  :icon="fontawesome_icon"  />
        </div>
        <div class="acards__text">
            <slot></slot>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name : "ACardsHeader",
    props : {
        classname : String,
        id : String,
        type : String,
        fontawesome_icon : String
    }
}
</script>


<style lang="scss">
@import "../../assets/sass/imports/general";

.acards__title{
    border-radius: 10px 10px 0px 0px;
    display: inline-flex;
    font-weight : bold;
    font-size : 1.23rem;
    width: 100%;
}

.acards__icon
{
    color: $black;
    font-size : 2rem;
    padding : 8px 10px 0px 15px;
    // z-index : 1;
    // animation: flipColor 1s;
    // animation-fill-mode: forwards;

     &--primary{
          color: $light-red;

        }

         &--info{
          color: $light-blue;
        }

        &--success{
          color: $light-green;
        }

        &--warning{
          color: $light-orange;
        }

}

.acards__text
{
    font-size : 1.23rem;
    padding-top: 18px;
    z-index : 3;
}

@keyframes flipColor{
    from{
         color: $light-red;
    }
    to{
         color: white;
    }
}

</style>