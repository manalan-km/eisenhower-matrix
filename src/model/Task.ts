export type Priority = 'no-priority' | 'imp-urgent' | 'imp-not-urgent' | 'not-imp-urgent' | 'not-imp-not-urgent';
export type taskStatus = 'completed' | 'in-progress';
export type Task = {
  id: number;
  TaskContent: string;
  TaskPriority: Priority;
  TaskStatus: taskStatus;
};
