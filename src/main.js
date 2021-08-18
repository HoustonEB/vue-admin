import Vue from 'vue'
import App from './App'
import router from './router'
// import {
//     scrollbar,
//     Menu,
//     Submenu,
//     MenuItem,
//     MenuItemGroup,
// } from 'element-ui'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUi from 'element-ui'
// import { Button, Table } from 'iview'
import '@@/public/css/common.scss'
import store from './store'



// if(process.env.NODE_ENV === 'development') {
//     require('@/service/mock/index');
// }


Vue.use(ElementUi);
// Vue.use(scrollbar);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);

// Vue.use(Button);
// Vue.use(Table);

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

