<i18n>
{
  "en": {
    "hello": "🥔🥔🥔🥔🥔🥔🥔🥔"
  },
  "ja": {
    "hello": "🍛🍙🍙🍛🍙🍙🍘"
  }
}
</i18n>

<template>
    <v-app>
        <header>
            <select v-model="locale">
                <option value="en">en</option>
                <option value="ja">ja</option>
            </select>
            <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
            {{ t('message.hello', { msg: 'hello' }) }}
            {{ t('hello', { msg: 'aaa' }) }}
        </header>

        <v-main>
            <VBtn @click="todoStore.loadTodos">Load data from server (it ovveride actual state!)</VBtn>
            <TodoList
                :todos="todoStore.filteredTodos"
                @add-todo="createTodo"
                @update-todo="updateTodo"
                @search="search"
            />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import type { Filter, TodoItem } from './components/TodoList/Models';
import TodoList from './components/TodoList/TodoList.vue';
import { useTodoStore } from "@/store/todo";
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n()



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
