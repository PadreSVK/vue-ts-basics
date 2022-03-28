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



const model = undefined as any as YesNoModel


export const useYesNoStore = defineStore('yesno', {
    state: () => ({ model }),
    actions: {
        async changeAnswer() {
            const response = await fetch("https://yesno.wtf/api/")
            const result : YesNoModel = await response.json()
            this.model = result
        },
    },
})


