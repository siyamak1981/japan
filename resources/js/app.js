window.Vue = require('vue');
import router from "./routes";
import VueRouter from "vue-router";
import Index from './Index';
import StarRating from './shared/components/StarRating'

Vue.use(VueRouter);

import axios from "axios";
window.axios = axios;

//moment
import moment from 'moment'
import Vue from "vue";
Vue.filter("fromNow" ,value => moment(value).fromNow())


//StarRating
Vue.component("star-rating", StarRating);

const app = new Vue({
    el: '#app',
    router,
    mode:history,
    components:{
        'Index':Index
    }
});