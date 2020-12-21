<template>
    <div class="overlays"> 
        <div 
        class="overlay"
        :class="[
            size ? 'overlay--' + size : '', 
            variant ? 'overlay--' + variant : '',
            classname
            ]"
        :id="id? id : ''"
        >
        </div>
    </div>
</template>

<script>
export default {
    name:"AOverlay",
    props: {
        size: String,
        classname : String,
        id : String,
        variant : String
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/imports/general";

.overlays {
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(228, 225, 225, 0.5);  
    justify-content:center;
    align-content: center;
    display:flex;
}

.overlay {
    position: relative;
    top: 50%;
    height:30px;
    width:30px;
    margin:0px auto;
    -webkit-animation: rotation .6s infinite linear;
    -moz-animation: rotation .6s infinite linear;
    -o-animation: rotation .6s infinite linear;
    animation: rotation .6s infinite linear;
    border-left:6px solid rgba(176, 184, 187, 0.15);
    border-right:6px solid rgba(165, 170, 172, 0.15);
    border-bottom:6px solid rgba(190, 193, 194, 0.15);
    border-top:6px solid rgba(87, 91, 92, 0.8);
    border-radius:100%;

    @-webkit-keyframes rotation {
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(359deg);}
    }
    @-moz-keyframes rotation {
    from {-moz-transform: rotate(0deg);}
    to {-moz-transform: rotate(359deg);}
    }
    @-o-keyframes rotation {
    from {-o-transform: rotate(0deg);}
    to {-o-transform: rotate(359deg);}
    }
    @keyframes rotation {
    from {transform: rotate(0deg);}
    to {transform: rotate(359deg);}
    }

    &--sm {
        position: absolute;
        height:20px;
        width:20px;
    }

    &--md {
        position: absolute;
        top: 40%;
        height:30px;
        width:30px;
    }

    &--lg {
        position: absolute;
        top: 30%;
        height:50px;
        width:50px;
    }

    &--primary { 
        border-left:6px solid rgba(243, 221, 221, 0.15);
        border-right:6px solid rgba(240, 159, 159, 0.15);
        border-bottom:6px solid rgba(240, 186, 186, 0.15);
        border-top:6px solid $light-red; 
    }

    &--success { 
        border-left:6px solid rgba(226, 231, 227, 0.8);
        border-right:6px solid rgba(195, 207, 196, 0.8);
        border-bottom:6px solid rgba(185, 206, 187, 0.8);
        border-top:6px solid $green; 
    }

    &--info { 
        border-left:6px solid rgba(229, 230, 231, 0.8);
        border-right:6px solid rgba(198, 215, 226, 0.8);
        border-bottom:6px solid rgba(218, 225, 230, 0.8);
        border-top:6px solid $blue; 
    }

    &--warning { 
        border-left:6px solid rgba(241, 240, 236, 0.8);
        border-right:6px solid rgba(240, 225, 179, 0.8);
        border-bottom:6px solid rgba(241, 235, 215, 0.8);
        border-top:6px solid $orange; 
    }
}
</style>