import { Priority, Task } from "../model/Task";

export const sortByPriority = (tasks: Task[],priority:Priority) => { 
    return tasks.filter(
        (task)=> {
          return task.TaskPriority === priority
        }
      )
}