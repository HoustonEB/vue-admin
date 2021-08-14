import Vue from 'vue'
import Router from 'vue-router'
console.log('router2')
const Home = () => import('@/views/home/Home')  // 首页

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', name: 'HOME', component: Home },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

