
<template>
    <button @click="todoStore.loadTodos">Load data from server (it ovveride actual state!)</button>
    <TodoList
        :todos="todoStore.filteredTodos"
        @add-todo="createTodo"
        @update-todo="updateTodo"
        @search="search"
        :filter="filter"
    />
</template>

<script setup lang="ts">
import type { Filter, TodoItem } from './Models';
import TodoList from './components/TodoList.vue';
import { useTodoStore } from "./store";
import { ref, type Ref } from 'vue';

const filter: Ref<Filter> = ref({ query: "", includeCompleted: true, includeNonCompleted: true })


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