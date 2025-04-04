import Task from "./task";


export type taskContext = {
    tasks: Task[];
    addTask: (task: Task) => void;
    editTask: (id: string, newTitle: string) => void;
    deleteTask: (id: string) => void;
    clearTasks: () => void;
};
