<template>
    <input id="query" type="query" v-model="innerFilter.query" @change="" placeholder="Search" />
    <select id="filter" @change="changeFilter(($event.target as any).value)">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="non-completed">Not Completed</option>
    </select>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { Filter } from "./Models";

const props = defineProps<{
    filter: Filter
}>()

const innerFilter: Filter = reactive(props.filter)

const emits = defineEmits<{
    (e: "filter-change", filter: Filter): void
}>();

function changeFilter(type: "all" | "completed" | "non-completed") {
    switch (type) {
        case 'all':
            innerFilter.includeCompleted = true
            innerFilter.includeNonCompleted = true
            break;
        case 'completed':
            innerFilter.includeCompleted = true
            innerFilter.includeNonCompleted = false
            break;
        case 'non-completed':
            innerFilter.includeCompleted = false
            innerFilter.includeNonCompleted = true
            break;
        default:
            break;
    }
}

watch(innerFilter, () => {
    emits('filter-change', innerFilter)
})

</script>
