import Home from "./Dashboard/Home.vue";
import Bookables from "./bookables/Bookables.vue";
import Bookable from "./bookable/Bookable.vue";
import Review from "./review/Review.vue";
import Basket from "./basket/Basket.vue";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Board from './front/Board'
import VueRouter from "vue-router";
import Middlewares from "./middlewares/index";

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
            meta:{
                middleware:[Middlewares.guest]
            }
        },
        {
            name: "register",
            path: "/register",
            component: Register,
            meta:{
                middleware:[Middlewares.auth]
            }
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
    
    
}

);

// function nextCheck(context, middleware, index){
//     const nextMiddleware = middleware[index];
//     if(!nextMiddleware) return context.next
//     return (...parameters) =>{
//         context.next(...parameters);
//         const nextMidd = nextCheck(context, middleware, index + 1);
//         nextMiddleware({...context, next:nextMidd})
//     }
    
// };
// router.beforeEach((to,from,next) =>{
//     if(to.meta.middleware) {
//         const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
//     }
//     const ctx = {
//         from,
//         next,
//         router,
//         to
//     };
//     const middleware = nextCheck(ctx, middleware, 1);
//     return middleware[0]({...ctx, next, nextMiddleware});
export default router;


