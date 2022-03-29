
<template>
    <button @click="todoStore.loadTodos">Load data from server (it ovveride actual state!)</button>
    <TodoList
        :todos="todoStore.filteredTodos"
        :filter="filter"
        @add-todo="createTodo"
        @update-todo="updateTodo"
        @search="search"
    />
</template>

<script setup lang="ts">
import type { Filter, TodoItem } from '@/components/TodoList/Models';
import TodoList from '@/components/TodoList/TodoList.vue';
import { useTodoStore } from "@/store/todo";
import { onMounted, reactive, watch } from "vue";
import { useRoute, useRouter, type RouteLocationNormalized } from "vue-router";

const todoStore = useTodoStore()
const router = useRouter()
const route = useRoute()

onMounted(async () => {
    await todoStore.loadTodos()
    await todoStore.filterTodos(filter)
})

function getFilterFromQuery(r: RouteLocationNormalized): Filter {
    return {
        query: r.query.q as string || "",
        includeCompleted: r.query.completed === undefined || r.query.completed === "true",
        includeNonCompleted: r.query.completed === undefined || r.query.completed === "false"
    }
}

const query: Filter = getFilterFromQuery(route)

const filter: Filter = reactive(query)

async function createTodo(title: string) {
    await todoStore.createTodo(title)
}

async function updateTodo(todo: TodoItem) {
    await todoStore.updateTodo(todo)
}

async function search(filterObject: Filter) {
    const completed = filterObject.includeCompleted && filterObject.includeNonCompleted
        ? undefined
        : filterObject.includeCompleted

    router.push({
        query: {
            q: filterObject.query,
            completed: completed?.toString()
        }
    })
}

watch(route, async (value) => {
    await todoStore.filterTodos(getFilterFromQuery(value))
})

</script>