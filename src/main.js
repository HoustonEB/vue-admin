import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'



// if(process.env.NODE_ENV === 'development') {
//     require('@/service/mock/index');
// }

// import './assets/css/public.css'

new Vue({
    el: '#app',
    router,
    //   store,
    components: { App },
    template: '<App/>'
})

