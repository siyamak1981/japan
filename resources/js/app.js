
window.Vue = require('vue');
import router from "./routes";
import VueRouter from "vue-router";
import Index from './Index';

Vue.use(VueRouter);

import axios from "axios";
window.axios = axios;

//moment
import moment from 'moment'
Vue.filter("fromNow" ,value => moment(value).fromNow())

const app = new Vue({
    el: '#app',
    router,
    mode:history,
    components:{
        'Index':Index
    }
});
