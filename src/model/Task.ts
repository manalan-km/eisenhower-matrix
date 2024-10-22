export type Priority = "no-priority" | "imp-urgent" | "imp-not-urgent" | "not-imp-urgent" | "not-imp-not-urgent"

export type Task= { 
    TaskContent: string,
    TaskPriority: Priority
}