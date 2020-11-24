<template>
    <div>
        <TheHeader></TheHeader>
        <TheSidebar></TheSidebar>
        <router-view/>
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue'
import TheSidebar from './TheSidebar.vue'
export default {
    name:'TheContainer',
    components:{
        TheHeader,
        TheSidebar,
    }
}
</script>

<style>

</style>