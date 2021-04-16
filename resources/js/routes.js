import Home from "./Dashboard/Home.vue";
import Bookables from "./bookables/Bookables.vue";
import Bookable from "./bookable/Bookable.vue";
import Review from "./review/Review.vue";
import Basket from "./basket/Basket.vue";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Board from './front/Board'
import VueRouter from "vue-router";

const router = new VueRouter({
    mode: "history",

    routes: [
        {
            path: '/board',
            name: 'board',
            component: Board,
        },
        {
            name: "login",
            path: "/login",
            component: Login,
        },
        {
            name: "register",
            path: "/register",
            component: Register,
        },

        {
            name: "home",
            path: "/",
            component: Home,
            children:[
                {
                    name: "bookables",
                    path: "/bookables",
                    component:Bookables
                },
                
                {
                    path: "/bookable/:id",
                    name: "bookable",
                    component:Bookable
                },
                {
                    path: "/review/:id",
                    name: "review",
                    component:Review
                },
                {
                    path: "/basket",
                    name: "basket",
                    component:Basket
                },
            ]
        },
    ]
});

export default router;

                                    