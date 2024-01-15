import React from "react";
import {choiceFilterType} from "./App";

type TaskType = {
    id: string,
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
    removeTask: (id: string) => void
    inpNewTask: string
    setInpNewTask: (value: string) => void
    isCheck: (id: string) => void
    choiseFilter: (title: choiceFilterType) => void
}
export const Todolist = ({
                             title,
                             tasks,
                             addTask,
                             removeTask,
                             setInpNewTask,
                             inpNewTask,
                             isCheck,
                             choiseFilter
                         }: PropsType) => {

    const onKeyPressAddTask = (e:  React.KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13){
            addTask()
        }
    }


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text"
                       value={inpNewTask}
                       onChange={(e) => setInpNewTask(e.target.value)}
                       onKeyPress={(e) => onKeyPressAddTask(e)}

                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {tasks.map(({id, title, isDone}) => <li key={id}>
                    <input type="checkbox" checked={isDone} onChange={() => isCheck(id)}/><span>{title}</span>
                    <button onClick={() => removeTask(id)}>x</button>
                </li>)}
            </ul>
            <div>
                <button onClick={() => choiseFilter('all')}>All</button>
                <button onClick={() => choiseFilter('active')}>Active</button>
                <button onClick={() => choiseFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}