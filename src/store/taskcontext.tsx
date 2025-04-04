import { createContext, useState } from "react";
import Task from "../lib/task";
import { taskContext } from "../lib/taskContext.1";

const TaskContext = createContext<taskContext | null>(null)

export const TaskContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [taskList, setTaskList] = useState<Task[]>([])

    const addTaskHandler = (task: Task) => {
        setTaskList((prevState)=> {
            return [
                task,
                ...prevState
            ]
        })
    }

    const editTaskHandler = (id: string, newTitle: string) => {
        setTaskList((prevState)=> {
            const updatedTasks = prevState.map( task => (task.id === id ? 
                { id, title: newTitle, date: new Date().toLocaleDateString() } : task))
            return updatedTasks
        })
    }

    const deleteTaskHandler = (id: string) => {
        setTaskList((prevState)=> {
            const updatedTasks = prevState.filter(task => task.id !== id)
            return updatedTasks
        })
    }

    const clearTasksHandler = () => {
        setTaskList([])
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