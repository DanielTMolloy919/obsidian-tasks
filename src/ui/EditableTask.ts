import type { Status } from '../Status';
import type { Task } from '../Task';

export type EditableTask = {
    description: string;
    status: Status;
    priority: 'none' | 'lowest' | 'low' | 'medium' | 'high' | 'highest';
    recurrenceRule: string;
    createdDate: string;
    startDate: string;
    scheduledDate: string;
    dueDate: string;
    doneDate: string;
    cancelledDate: string;
    forwardOnly: boolean;
    blockedBy: Task[];
    blocking: Task[];
};
