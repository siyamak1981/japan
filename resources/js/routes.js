import Home from "./Dashboard/Home.vue";
import Bookables from "./bookables/Bookables.vue";
import Bookable from "./bookables/Bookable.vue";
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
            ]
        },
    ]
});

export default router;

                                    