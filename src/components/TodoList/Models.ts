export interface Filter {
    query: string
    includeCompleted: boolean
    includeNonCompleted: boolean
}

export interface TodoItem {
    id: string
    done: boolean
    description: string
    completed?: Date | null
}