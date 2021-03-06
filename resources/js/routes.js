import Home from "./components/Dashboard/Home.vue";
import Bookables from "./components/bookables/Bookables.vue";
import Bookable from "./components/bookables/Bookable.vue";
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
                    name: "bookable",
                    path: "/bookable/:id",
                    component:Bookable
                },
            ]
        },
    ]
});

export default router;

                                    