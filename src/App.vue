<template>
    <div class="admin-page-wrapper">
        <Layout>
            <router-view></router-view>
        </Layout>
    </div>
</template>
<style lang="scss">
.admin-page-wrapper {
    width: 100%;
    height: 100%;
}
</style>
<script>
import {
    getUserInfo
} from '@/service/common';
import Layout from '@/components/Layout/Layout';
export default {
    components: {
        Layout,
    },
    data() {
        return {
        }
    },
    mounted() {
        getUserInfo();
    },
    watch: {
    },
    methods: {
    },
}
</script>
