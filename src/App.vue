
<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>
    <main>
        <TodoList
            :todos="todoStore.todos"
            @add-todo="createTodo"
            @update-todo="updateTodo"
            @search="search"
        />
    </main>

    
</template>

<script setup lang="ts">

import { useTodoStore } from "@/store/todo";
import type { Filter, TodoItem } from './components/TodoList/Models';
import TodoList from './components/TodoList/TodoList.vue';
const todoStore = useTodoStore()

todoStore.loadTodos({includeCompleted: true, includeNonCompleted: true, query: ""})
async function createTodo(title: string) {
    todoStore.createTodo(title)
}

async function updateTodo(todo: TodoItem) {
    await todoStore.updateTodo(todo)
}

async function search(filterObject: Filter) {
    await todoStore.loadTodos(filterObject)
}

</script>


<style scoped>
.logo {
    position: absolute;
    top: 0px;
    right: 0px;
}
</style>
