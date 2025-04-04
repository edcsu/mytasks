import ITask from "./task";

export type taskContext = {
    tasks: ITask[];
    addTask: (task: ITask) => void;
    editTask: (id: string, newTitle: string) => void;
    deleteTask: (id: string) => void;
    clearTasks: () => void;
};
