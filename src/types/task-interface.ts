export interface TaskInterface {
    id: string;
    title: string;
    description: string;
    creationDate: Date;
    expirationDate: Date;
    priority: TaskPriority;
}

export enum TaskPriority {
    Low = 'low',
    Medium = 'medium',
    High = 'high',
    Urgent = 'urgent',
}

export interface ITaskForm {
    title: string;
    description: string;
    priority: TaskPriority;
    expirationDate: Date;
}