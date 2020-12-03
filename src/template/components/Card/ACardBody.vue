<template>
<div class="acards__description" :class="classname" :id="id">
    <slot></slot>
</div>
</template>

<script>
export default {
    name : "ACardsBody",
    props :{
        classname : String,
        id : String
    }
}
</script>

<style lang="scss" scoped>
    .acards__description{
        margin-bottom: 50px;
        padding: 15px 30px;
        z-index : 2;
    }
</style>