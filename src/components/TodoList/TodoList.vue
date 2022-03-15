<template>
    <div class="center" @keydown.h="keypCalled">
        <input id="query" type="query" v-model="filterObject.query" placeholder="Search" />
        <br />
        <label for="includeCompleted">Include completed</label>
        <input type="checkbox" id="includeCompleted" v-model="filterObject.includeCompleted" />
        <br />
        <label for="includeNonCompleted">Include Non completed</label>
        <input type="checkbox" id="includeNonCompleted" v-model="filterObject.includeNonCompleted" />
        <ul>
            <TodoListItem
                v-for="todo in todos"
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

<script setup>
import { reactive, ref, watch } from 'vue';
import TodoListItem from './TodoListItem.vue';

const emit = defineEmits(["add-todo", "update-todo", "search"])

defineProps({
    todos: {
        required: true
    }
})

const color = ref("green")
const description = ref("")

const filterObject = reactive({
    query: "",
    includeCompleted: true,
    includeNonCompleted: true
})

watch(filterObject, filterObject => {
    emit('search', filterObject)
})

function updateTodo(todo) {
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

</script>

<style scoped>
.center {
    margin: auto;
    width: 50%;
    border: 3px solid v-bind("color");
    padding: 10px;
}
</style>