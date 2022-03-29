

import { createRouter, createWebHistory } from "vue-router";
import ViewA from "@/views/ViewA.vue";
import ViewB from "@/views/ViewB.vue";
import Todo from "@/views/Todo.vue";
import UserProfile from "@/views/UserProfile.vue";
import NotFound from "@/views/404.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "ViewA", component: ViewA },
        { path: "/viewb/:id?", name: "ViewB", component: ViewB },
        { path: "/todos", name: "Todo", component: Todo },
        { path: "/profile", name: "UserProfile", component: UserProfile },

        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
    ]
})