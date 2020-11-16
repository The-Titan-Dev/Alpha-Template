<template>
    <div>
        <TheHeader/>
        <router-view/>aasdasd
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue'
export default {
    name:'TheContainer',
    components:{
        TheHeader,
    }
}
</script>

<style>

</style>