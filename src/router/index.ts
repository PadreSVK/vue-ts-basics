

import { createRouter, createWebHistory } from "vue-router";
import ViewA from "@/views/ViewA.vue";
import ViewB from "@/views/ViewB.vue";
// import Todo from "@/views/Todo.vue";
// import UserProfile from "@/views/UserProfile.vue";
import NotFound from "@/views/404.vue";

export const Routes = {
    ViewA: "ViewA",
    ViewB: "ViewB",
    Todo: "Todo",
    UserProfile: "UserProfile"
}

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "ViewA", component: ViewA },
        {
            path: "/viewb/:id?", name: "ViewB", component: ViewB, meta: {
                metadata: "cupakabra"
            }
        },
        { path: "/todos", name: "Todo", component: import("@/views/Todo.vue") },
        { path: "/profile", name: "UserProfile", component: import("@/views/UserProfile.vue") },

        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
    ]
})