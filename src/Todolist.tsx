import React, {useState} from "react";

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string
    /*tasks: {
        id: number,
        title: string,
        isDone: boolean
    }[]*/           // Можно сделать так
    tasks: Array<TaskType>
    addTask: () => void
    removeTask: (id: number) => void
    inpNewTask: string
    setInpNewTask: (value: string) => void
    isCheck: (id: number) => void
    isActivTasks: () => void
    isAllTasks: () => void
    isCompleted: () => void
}
export const Todolist = ({
                             title,
                             tasks,
                             addTask,
                             removeTask,
                             setInpNewTask,
                             inpNewTask,
                             isCheck,
                             isActivTasks,
                             isAllTasks,
                             isCompleted
                         }: PropsType) => {


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text"
                       value={inpNewTask}
                       onChange={(e) => setInpNewTask(e.target.value)}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {tasks.map(({id, title, isDone}) => <li key={id}>
                    <input type="checkbox" checked={isDone} onChange={() => isCheck(id)}/><span>{title}</span>
                    <button onClick={() => removeTask(id)}>x</button>
                </li>)}
            </ul>
            <div>
                <button onClick={isAllTasks}>All</button>
                <button onClick={isActivTasks}>Active</button>
                <button onClick={isCompleted}>Completed</button>
            </div>
        </div>
    )
}