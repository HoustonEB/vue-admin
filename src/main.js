import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import { Button, Table } from 'iview'
// import store from './store'



// if(process.env.NODE_ENV === 'development') {
//     require('@/service/mock/index');
// }

// import './assets/css/public.css'
Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Table);

new Vue({
    el: '#app',
    router,
    //   store,
    components: { App },
    template: '<App/>'
})

