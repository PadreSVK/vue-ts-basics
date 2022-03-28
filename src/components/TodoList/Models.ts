export interface Filter {
    query: string
    includeCompleted: boolean
    includeNonCompleted: boolean
}

export interface TodoItem{
    userId: string
    id: string
    title: string
    completed: boolean
}