export interface TaskInterface {
    id: string;
    title: string;
    description: string;
    creationDate: Date;
    exparationDate: Date;
    priority: TaskPriority;
}

export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';