import Home from "./Dashboard/Home.vue";
import Bookables from "./bookables/Bookables.vue";
import Bookable from "./bookable/Bookable.vue";
import Review from "./review/Review.vue";
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
            ]
        },
    ]
});

export default router;

                                    