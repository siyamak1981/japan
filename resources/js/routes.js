import Home from "./Dashboard/Home.vue";
import Bookables from "./bookables/Bookables.vue";
import Bookable from "./bookable/Bookable.vue";
import Review from "./review/Review.vue";
import Basket from "./basket/Basket.vue";
import VueRouter from "vue-router";


const router = new VueRouter({
    mode: "history",

    routes: [
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

                                    