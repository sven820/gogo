<template>
    <div>
        <navgation></navgation>
        <router-view></router-view>
        <foot v-show="showfoot"></foot>
    </div>
</template>

<script>
    import navgation from '../components/Navgation'
    import foot from '../components/Footer'
    export default {
        name: "index.vue",
        components: {
            navgation,
            foot
        },
        data() {
            return {
            }
        },
        props: {
            showfoot: Boolean
        },
        created() {

        }
    }
</script>

<style scoped>

</style>