import type { Filter, TodoItem } from '@/components/TodoList/Models';
import { defineStore } from 'pinia'

interface TodoState {
    todos: Array<TodoItem>
}

const todoState: () => TodoState = () => ({ todos: [] })

function filterTodos(filterObject: Filter, todos: Array<TodoItem>): Array<TodoItem> {
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
    return result
}


export const useTodoStore = defineStore("todos", {
    state: todoState,
    actions: {
        async loadTodos(filter: Filter) {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const result: Array<TodoItem> = await response.json()
            this.todos = filterTodos(filter, result)
        },
        updateTodo(todo: TodoItem) {
            // todo here should be call on server to persist change!
            const todoToUpdate = this.todos.find(i => i.id == todo.id)
            Object.assign(todoToUpdate, todo)
        },
        createTodo(title: string) {
            // todo here should be call on server to persist change!
            this.todos.push({ id: "1123456", completed: false, title: title, userId: "asdsadsa" })
        }
    }
})
