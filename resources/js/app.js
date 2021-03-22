window.Vue = require('vue');
import router from "./routes";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Index from './Index';
import StarRating from './shared/components/StarRating'
import FatalError from './shared/components/FatalError'
import Success from './shared/components/Success'
import ValidationErrors from './shared/components/ValidationErrors'
import storeDefinition from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

import axios from "axios";
window.axios = axios;

//moment
import moment from 'moment'
import Vue from "vue";
Vue.filter("fromNow" ,value => moment(value).fromNow())


//StarRating
Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);

const store = new Vuex.Store(storeDefinition)

const app = new Vue({
    el: '#app',
    router,
    store,
    mode:history,
    components:{
        'Index':Index
    },
    beforeCreate(){
        this.$store.dispatch('loadStoredState');
    }
});