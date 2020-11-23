<template>
    <div>
        <TheHeader></TheHeader>
        <router-view/>
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue'
export default {
    name:'TheContainer',
    components:{
        TheHeader
    }
}
</script>

<style>

</style>