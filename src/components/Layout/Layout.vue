<template src="./Layout.html"></template>
<style lang="scss" src="./Layout.style.scss"></style>
<script>
import { mapState, mapActions } from 'vuex';
import Sidebaritem from '@/components/SidebarItem'

export default {
    components: {
        Sidebaritem
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            navList: state => state.user.navList
        })
    },
    watch: {
    },
    methods: {
        ...mapActions(['getNavList'])
    },
    mounted() {
        this.getNavList();
    },
}
</script>
