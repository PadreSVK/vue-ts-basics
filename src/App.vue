
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

        <br>
        <h1>
            {{store.count}}
            {{store.age}}
            {{store.double}}
            <button @click="changeStore" >Click me</button>
        </h1>

        <YesNo/>
    </main>

    
</template>

<script setup lang="ts">

import { useCounterStore, useTodoStore } from "@/store";
import { reactive, ref, type Ref } from 'vue';
import type { Filter, TodoItem } from './components/TodoList/Models';
import TodoList from './components/TodoList/TodoList.vue';
import YesNo from './components/YesNo.vue';


const todoStore = useTodoStore()

todoStore.loadTodos({includeCompleted: true, includeNonCompleted: true, query: ""})

const store = useCounterStore()


function changeStore(){
    //direct change
    // store.count = 50
    // store.age = 100

    store.$patch({
        age: 100,
        count: 50
    })
    // store.increment()
}

//load from server
const todos: Array<TodoItem> = []


async function createTodo(description: string) {
    todos.push({ id: "1123456", completed: false, title: description, userId: "asdsadsa" })
    //call to server
    // load of todos
    //todos = reactive(await... )
}

async function updateTodo(todo: TodoItem) {
    // call to server
    // update todo
    // reload todos

    const todoToUpdate = todos.find(i => i.id == todo.id)
    Object.assign(todoToUpdate, todo)
}

const filteredTodos: Ref<Array<TodoItem>> = ref(todos)

function search(filterObject: Filter) {
    console.log({ ...filterObject });
    const { includeCompleted, includeNonCompleted, query } = filterObject

    let result = todos
    if (includeNonCompleted && !includeCompleted) {
        result = todos.filter(i => !i.completed)
    }
    else if (includeCompleted && !includeNonCompleted) {
        result = todos.filter(i => i.completed)
    }
    if (query) {
        result = result.filter(i => i.title.includes(query))
    }
    filteredTodos.value = result
}

</script>


<style scoped>
.logo {
    position: absolute;
    top: 0px;
    right: 0px;
}
</style>
