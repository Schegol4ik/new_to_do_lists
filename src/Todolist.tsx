import React from "react";
import './App.css'
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
    error: string | null
    setError: (value: string | null) => void
    filter: choiceFilterType
}
export const Todolist = ({
                             title,
                             tasks,
                             addTask,
                             removeTask,
                             setInpNewTask,
                             inpNewTask,
                             isCheck,
                             choiseFilter,
                             error,
                             setError,
                             filter
                         }: PropsType) => {

    const onKeyPressAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask()
        }
    }
    const inputTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInpNewTask(e.target.value)
        setError(null)
    }


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text"
                       className={error ? 'error_input' : ''}
                       value={inpNewTask}
                       onChange={(e) => inputTaskChange(e)}
                       onKeyPress={(e) => onKeyPressAddTask(e)}

                />
                <button onClick={addTask}>+</button>
            </div>
            {error && <div className='error'>{error}</div>}
            <ul>
                {tasks.map(({id, title, isDone}) => <li key={id} className={isDone ? "is_done" : ''}>
                    <input type="checkbox" checked={isDone} onChange={() => isCheck(id)}/><span>{title}</span>
                    <button onClick={() => removeTask(id)}>x</button>
                </li>)}
            </ul>
            <div>
                <button
                    className={filter === 'all' ? 'button_category' : ''}
                    onClick={() => choiseFilter('all')}>All
                </button>
                <button className={filter === 'active' ? 'button_category' : ''}
                        onClick={() => choiseFilter('active')}>Active
                </button>
                <button className={filter === 'completed' ? 'button_category' : ''}
                        onClick={() => choiseFilter('completed')}>Completed
                </button>
            </div>
        </div>
    )
}