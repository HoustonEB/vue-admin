<template>
    <div class="sidebar-item-wrapper">
        <template v-for="item in treeData">
            <el-submenu v-if=" item.children && item.children.length > 0" :key=" item.id" :index="item.id">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.name}}</span>
                </template>
                <SidebarItem :treeData="item.children" />
            </el-submenu>
            <Link v-else :key="item.id" :url="item.url">
                <el-menu-item :index="item.id">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </Link>
        </template>
    </div>
</template>
<style lang="scss"></style>
<script>
import Link from '@/components/Link'

export default {
    name: 'SidebarItem',
    components: {
        Link
    },
    props: {
        treeData: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
        }
    },
    computed: {},
    watch: {},
    methods: {},
    mounted() { },
}
</script>
