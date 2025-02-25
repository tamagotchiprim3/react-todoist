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
    Urgent = 'urgent'
}