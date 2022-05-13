import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import AllItem from "../views/AllItem.vue";
import SingleItem from "../views/SingleItem.vue";
import Faq from "../views/Faq.vue";
import CreateOrder from "../views/CreateOrder.vue";
import Game from "../views/Game.vue";

// export default new Router({
const routes = [
    {
        path: "/",
        component: Home,
        children: [
            {
                path: "",
                component: Shop,
                children: [
                    {
                        path: "",
                        name: "allitem",
                        component: AllItem,
                        props: true,
                    },
                    {
                        path: "detail",
                        name: "singleitem",
                        component: SingleItem,
                        props: true,
                    },
                ],
            },
            {
                path: "faq",
                component: Faq,
            },
            {
                path: "createOrder",
                component: CreateOrder,
            },
            {
                path: "game",
                component: Game,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
// })
