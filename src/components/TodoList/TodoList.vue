<template>
    <div class="center" @keydown.h="keypCalled">
        <TodoFilter @filter-change="filterChanged" />

        <ul>
            <TodoListItem
                v-for="todo in props.todos"
                :key="todo.id"
                :done="todo.done"
                v-model:description="todo.description"
                :completed="todo.completed"
                @toggle-item="updateTodo({ ...todo, done: $event })"
            />
        </ul>
        <input
            type="text"
            v-model="description"
            placeholder="Add todo"
            @keydown.enter="addTodo"
            @keydown.0.stop.prevent="addTodo"
        />

        <hr />
        <hr />
        <label for="color">Border Color</label>
        <input id="color" type="text" v-model="color" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoListItem from './TodoListItem.vue';
import TodoFilter from './TodoFilter.vue';
import type { Filter, TodoItem } from './Models';


const emit = defineEmits<{
    (e: 'add-todo', description: string): void,
    (e: 'update-todo', todo: TodoItem): void,
    (e: 'search', filter: Filter): void,
}>()

const props = defineProps<{
    todos: Array<TodoItem>
}>()

const color = ref("green")
const description = ref("")

function updateTodo(todo: TodoItem) {
    if (todo.done) {
        todo.completed = new Date()
    }
    else {
        todo.completed = null
    }
    emit('update-todo', todo)
}

function keypCalled() {
    console.log("keyup called");
}

function addTodo() {
    emit('add-todo', description.value)
    description.value = ""
}

function filterChanged(filter: Filter) {
    emit('search', filter)
}

</script>

<style scoped>
.center {
    margin: auto;
    width: 50%;
    border: 3px solid v-bind("color");
    padding: 10px;
}
</style>