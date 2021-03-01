
window.Vue = require('vue');
import axios from "axios";
import router from "./routes";
import VueRouter from "vue-router";
import Index from './Index';

Vue.use(VueRouter);

axios.defaults.baseURL = "127.0.0.1:8000/api"

const app = new Vue({
    el: '#app',
    router,
    mode:history,
    components:{
        'Index':Index
    }
});
