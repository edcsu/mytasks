import { createContext } from "react";
import Task from "../lib/task";

const TaskContext = createContext({
    tasks : null,
    addTask : (task: Task) => {},
    editTask : (id: string) => {},
    deleteTask : (id: string) => {},
})

export const TaskContextProvider = (props : unknown) => {
    return <TaskContext.Provider>
        {props.chiildren}
    </TaskContext.Provider>
}

export default TaskContext