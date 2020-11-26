<template>
    <div>
        <TheHeader></TheHeader>
        <TheSidebar></TheSidebar>
        <TheAside></TheAside>
        <router-view/>
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue'
import TheSidebar from './TheSidebar.vue'
import TheAside from './TheAside.vue'
export default {
    name:'TheContainer',
    components:{
        TheHeader,
        TheSidebar,
        TheAside,
    }
}
</script>

<style>

</style>