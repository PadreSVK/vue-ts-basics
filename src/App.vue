
<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
      <TodoList
        :todos="filteredTodos"
        @add-todo="createTodo"
        @update-todo="updateTodo"
        @search="search"
    ></TodoList>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import TodoList from './components/TodoList/TodoList.vue';



//load zo serveru
const todos = reactive([
    { id: "ab17767429554e27ab181bcfab8d074a", completed: new Date(), done: true, description: "Renard" },
    { id: "3b8c70aef31e4d0184cb9926a4b75f59", completed: null, done: false, description: "Leclerc" },
    { id: "d6927109c0e640d0ad11dc1b89ffa458", completed: new Date(), done: true, description: "Riviere" },
    { id: "a897fe8eb5414b37af76c143f331cf95", completed: new Date(), done: true, description: "Vasseur" },
    { id: "34de7472b4854ce196d9c8c02b36a6c4", completed: new Date(), done: true, description: "Bourgeois" },
    { id: "812846b6c4fe46ac9b5f012f127f9061", completed: new Date(), done: true, description: "Minim et cillum quis nisi sunt est eiusmod." },
    { id: "16e8c6f4859b4a2b8b4699ac7d2c3cdf", completed: null, done: false, description: "Non sunt esse cupidatat id id sit adipisicing ex incididunt ipsum dolore culpa sunt." },
    { id: "02584f8fc4cc4982ad09f1625d9630be", completed: null, done: false, description: "Enim eu ut ex consequat esse irure." },
    { id: "1c5faff9eb9b4684bb4224f25bf9b03d", completed: new Date(), done: true, description: "Incididunt consectetur mollit sint." },
    { id: "6039dbb5b1d64bc298e61579cad8dcc3", completed: null, done: false, description: "Ipsum laborum amet est." },
    { id: "951c513234c74b4ea847546a9145bb5b", completed: null, done: false, description: "Sunt Lorem consectetur minim labore aliquip deserunt aliqua non non sit." },
    { id: "7649b28f393446d99963cb5d3d65b530", completed: null, done: false, description: "Aute reprehenderit ea consequat sit pariatur laborum incididunt sit." },
    { id: "49ae774d426a4eb5b326909ad54ab119", completed: null, done: false, description: "Elit aute consequat qui culpa id anim Lorem amet duis." },
    { id: "855f2c338c9c4eeeae93aedc3a6361ef", completed: null, done: false, description: "Ex veniam occaecat qui velit id." },
    { id: "92734e3157154c77895b5844ff99dc86", completed: new Date(), done: true, description: "Aute laborum irure culpa do elit enim tempor id laborum." },
    { id: "6babc1649bfc480e9d7f8af7e571a8ed", completed: null, done: false, description: "Consequat esse nulla anim est Lorem aliqua aliquip enim." },
    { id: "d63a637657ca4ac5a10b059fbaca3417", completed: null, done: false, description: "Veniam nostrud anim nostrud exercitation officia qui dolor laboris occaecat." },
    { id: "8861099a13624429a6140da71adf1c88", completed: new Date(), done: true, description: "Renault" },
    { id: "5e508cd3068f40299bf8b103da5156eb", completed: null, done: false, description: "Qui ut ex minim ad eiusmod veniam do tempor." },
    { id: "1fdaaa50fd914c39b7148d3f604185d9", completed: null, done: false, description: "Irure in nulla eu laborum cupidatat et consectetur veniam aute adipisicing eu." },
    { id: "3268daad47f94e1a823a85583ec14ad2", completed: new Date(), done: true, description: "Occaecat labore sit veniam non." },
    { id: "fd5d6d010a06485c9e3c2c942c971861", completed: null, done: false, description: "Dolore sunt ad adipisicing velit elit pariatur laboris." },
    { id: "95db0954cb2d49f4a623139fe090039d", completed: null, done: false, description: "Aute minim nisi magna commodo eiusmod aliqua irure pariatur eu in dolore enim duis Lorem laboris." },
    { id: "049e2dfdf4b04d75b12aa60fa13c0986", completed: new Date(), done: true, description: "Commodo nisi aliqua ex culpa velit fugiat." },
    { id: "1ff9c520300843f58211ed859cc19eb8", completed: null, done: false, description: "Ea consequat ad labore adipisicing laboris anim sint." },
    { id: "5ac67f850b5f4d71b7f796946682d524", completed: null, done: false, description: "Officia qui occaecat est deserunt minim nostrud eiusmod aliqua." },
    { id: "28ff405ed0f44a67af82905fe1317d45", completed: null, done: false, description: "Laborum commodo est officia incididunt mollit culpa aliqua sunt sint ad." },
    { id: "3a056979f4c04919a290ad64cf90a305", completed: null, done: false, description: "Laborum anim sunt cillum excepteur occaecat culpa quis irure cillum dolore in occaecat laboris tempor." },
    { id: "01ca30f3cac340cb8b5740b96d9550a8", completed: null, done: false, description: "Excepteur incididunt et dolor mollit occaecat veniam cupidatat aliquip laborum mollit do eiusmod Lorem elit." },
])

type Todo = typeof todos[0]

async function createTodo(description : Todo) {
    todos.push({ id: "1123456", done: false, description: description })

    //call na server
    // load to todos
    //todos = reactive(await... )
}

async function updateTodo(todo : Todo) {
    //call na server
    //update todo
    // reload todos

    const todoToUpdate = todos.find(i => i.id == todo.id)
    Object.assign(todoToUpdate, todo)
}

const filteredTodos = ref(todos)

interface FilterObject{
    query: string
    includeCompleted: boolean
    includeNonCompleted: boolean
}

function search( filterObject : FilterObject ) {
    console.log({ ...filterObject });
    const { includeCompleted, includeNonCompleted, query} = filterObject

    let result = todos
    if (includeNonCompleted && !includeCompleted) {
        result = todos.filter(i => !i.done)
    }
    else if (includeCompleted && !includeNonCompleted) {
        result = todos.filter(i => i.done)
    }

    if (query) {
        result = result.filter(i => i.description.includes(query))
    }

    filteredTodos.value = result
}

</script>


<style>

</style>
