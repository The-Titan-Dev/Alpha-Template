<template>
<div class="acards__footer" :class="classname" :id="id">
    <slot></slot>
</div>
</template>

<script>
export default {
    name : "ACardsFooter",
    props :{
        classname : String,
        id : String
    }
}
</script>

<style lang="scss" scoped>
    .acards__footer{
        text-align: center;
        padding: 10px;
        position: absolute;
        bottom: 0px;
    }
</style>