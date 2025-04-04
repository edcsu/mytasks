import { createContext, useState } from "react";
import ITask from "../lib/task";
import { taskContext } from "../lib/taskContext";

const TaskContext = createContext<taskContext | null>(null)

export const TaskContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [taskList, setTaskList] = useState<ITask[]>(JSON.parse(localStorage.getItem("taskList") || '""') || [])

    const addTaskHandler = (task: ITask) => {
        setTaskList((prevState)=> {
            const updatedTasks = [
                task,
                ...prevState
            ];
            localStorage.setItem("taskList", JSON.stringify(updatedTasks))
            return updatedTasks
        })
    }

    const editTaskHandler = (id: string, newTitle: string) => {
        setTaskList((prevState)=> {
            const updatedTasks = prevState.map( task => (task.id === id ? 
                { id, title: newTitle, date: new Date().toLocaleDateString() } : task))
            localStorage.setItem("taskList", JSON.stringify(updatedTasks))
            return updatedTasks
        })
    }

    const deleteTaskHandler = (id: string) => {
        setTaskList((prevState)=> {
            const updatedTasks = prevState.filter(task => task.id !== id)
            localStorage.setItem("taskList", JSON.stringify(updatedTasks))
            return updatedTasks
        })
    }

    const clearTasksHandler = () => {
        setTaskList([])
        localStorage.removeItem("taskList")
    }

    const context : taskContext = {
        tasks : taskList,
        addTask: addTaskHandler,
        editTask: editTaskHandler,
        deleteTask: deleteTaskHandler,
        clearTasks: clearTasksHandler
    }

    return <TaskContext.Provider value={context}>
        {children}
    </TaskContext.Provider>
}

export default TaskContext