import type { Filter, TodoItem } from '@/components/TodoList/Models';
import { defineStore } from 'pinia'

export interface YesNoModel {
    answer: string;
    forced: boolean;
    image: string;
}

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, age: 10 }),
    getters: {
        double: state => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})

interface YesNoState {
    model?: YesNoModel
    age: number
}

const state: () => YesNoState = () => ({ age: 4, model: undefined })

export const useYesNoStore = defineStore('yesno', {
    state,
    actions: {
        async changeAnswer() {
            const response = await fetch("https://yesno.wtf/api/")
            const result: YesNoModel = await response.json()
            this.model = result
        },
    },
})



interface TodoState {
    todos: Array<TodoItem>
}

const todoState: () => TodoState = () => ({ todos: [] })


export const useTodoStore = defineStore("todos", {
    state: todoState,
    actions:{
        async loadTodos(filter : Filter){
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const result: Array<TodoItem> = await response.json()
            this.todos = result
        }
    }
})



