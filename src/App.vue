
<template>
    <header>
        <router-link to="/">View A</router-link>
        <br>
        <router-link to="/viewb">View B</router-link>
        <br>
        <router-link to="/todos">Todos</router-link>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>
    <main>
        <router-view />
    </main>
</template>

<script setup lang="ts">

</script>


<style scoped>
.logo {
    position: absolute;
    top: 0px;
    right: 0px;
}
</style>
