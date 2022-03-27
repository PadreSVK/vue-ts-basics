<template>
    <input id="query" type="query" v-model="filter.query" placeholder="Search" />
    <select id="filter" @change="changeFilter($event.target.value)">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="non-completed">Not Completed</option>
    </select>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { Filter } from "./Models";

const filter: Filter = reactive({ query: "", includeCompleted: true, includeNonCompleted: true })

const emits = defineEmits<{
    (e: "filter-change", filter: Filter): void
}>();

function changeFilter(type: "all" | "completed" | "non-completed") {

    switch (type) {
        case 'all':
            filter.includeCompleted = true
            filter.includeNonCompleted = true
            break;
        case 'completed':
            filter.includeCompleted = true
            filter.includeNonCompleted = false
            break;
        case 'non-completed':
            filter.includeCompleted = false
            filter.includeNonCompleted = true
            break;
        default:
            break;
    }
}

watch(filter, () => {
    emits('filter-change', filter)
})

</script>
