
window.Vue = require('vue');
import router from "./routes";
import VueRouter from "vue-router";
import Index from './Index';

Vue.use(VueRouter);

import axios from "axios";
window.axios = axios;


const app = new Vue({
    el: '#app',
    router,
    mode:history,
    components:{
        'Index':Index
    }
});
