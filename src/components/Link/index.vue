<template>
    <a v-if="isExternal" :href="url">
        <slot></slot>
    </a>
    <router-link v-else :to="url">
        <slot></slot>
    </router-link>
</template>
<style lang="scss">

</style>
<script>
import { isExternal } from '@/utils'
export default {
    name: 'SidebarItem',
    props: {
        url: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
        }
    },
    computed: {
        isExternal() {
            return isExternal(this.url)
        }
    },
    watch: {},
    methods: {},
    mounted() { },
}
</script>
