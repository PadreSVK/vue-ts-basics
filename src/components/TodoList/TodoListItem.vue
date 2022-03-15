<template>
    <li>
        <div class="row">
            <input
                type="checkbox"
                :checked="props.done"
                @input="emit('toggle-item', $event.target.checked)"
            />
            {{ completedMark }}
            <div :class="{ strikethrough: done }">{{ description }}</div>
        </div>
        {{ datetime }}
        <!-- <div v-if="completed">{{ "📅" + localTime }}</div>
        <div v-else>🥔🥔</div>-->
        <!-- <input
            type="text"
            :value="props.description"
            @keyup.enter="emit('update:description', $event.target.value)"
        />-->
    </li>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
    done: {
        required: true,
        type: Boolean
    },
    description: {
        required: true,
        type: String
    },
    completed: {
        type: Date
    }
})

const datetime = computed(() =>
    props.done
        ? "📅" + props.completed?.toLocaleString()
        : "🥔🥔"
)

const localTime = computed(() => props.completed?.toLocaleString())


const completedMark = computed(() => props.done ? "✔" : "❌")
const emit = defineEmits(["update:description", "toggle-item"])
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
}

/* li:before {
    content: "\1F95E";
    margin-left: -20px;
    margin-right: 10px;
} */
.strikethrough {
    text-decoration: line-through;
}
</style>