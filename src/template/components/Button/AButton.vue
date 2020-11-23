<template>
    <button @click = "doMethod" class="abtn" :class="'abtn--'+size+ ' abtn--'+atype">
        <slot></slot>    
    </button>    
</template>


<script>
export default {
    name : 'AButton',
    props : {
        method_name : {
            type : String,
            default : 'false'
        },
        size : {
            type : String,
            default : 'false'
        },
        atype : {
            type : String,
            default : 'false'
        }
    },
    methods : {
        doMethod() {
            this.$parent[this.method_name]();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/imports/general";

.abtn {
    border-radius : 5px;
    border-style : solid;
    font-size: 14px;
    margin: 4px;
    padding: 4px 14px;
    
    &--sm
    {
        font-size: 12px;
        padding: 2px 7px;
    }

    &--md
    {
        font-size: 14px;
        padding: 4px 14px;
    }

    &--lg
    {
        font-size: 20px;
        padding: 5px 20px;
    }

    &--primary
    {
        background: $primary;
        border-color: rgb(224, 224, 224);
        color: rgb(221, 220, 220);

    }
}

</style>