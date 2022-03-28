
<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>
    <main>
        <button @click="todoStore.loadTodos" >Load data from server (it ovveride actual state!)</button>
        <TodoList
            :todos="todoStore.filteredTodos"
            @add-todo="createTodo"
            @update-todo="updateTodo"
            @search="search"
        />
    </main>
</template>

<script setup lang="ts">
import type { Filter, TodoItem } from './components/TodoList/Models';
import TodoList from './components/TodoList/TodoList.vue';
import { useTodoStore } from "@/store/todo";

const todoStore = useTodoStore()

//first load of data
todoStore.loadTodos()
async function createTodo(title: string) {
    await todoStore.createTodo(title)
}

async function updateTodo(todo: TodoItem) {
    await todoStore.updateTodo(todo)
}

async function search(filterObject: Filter) {
    await todoStore.filterTodos(filterObject)
}

</script>


<style scoped>
.logo {
    position: absolute;
    top: 0px;
    right: 0px;
}
</style>
