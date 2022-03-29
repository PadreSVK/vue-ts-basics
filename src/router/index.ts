

import { createRouter, createWebHistory } from "vue-router";
import ViewA from "@/views/ViewA.vue";
import ViewB from "@/views/ViewB.vue";
import Todo from "@/views/Todo.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: ViewA },
        { path: "/viewb", component: ViewB },
        { path: "/todos", component: Todo },
    ]
})