import React, {useState} from 'react';
import './App.css'
import {Todolist} from "./Todolist";
import {v1} from "uuid";


export type choiceFilterType = 'active' | 'all' | 'completed'
const App = () => {


    const [tasks, setTasks] = useState([
        {id: v1(), title: "Html&Css", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false}
    ])
    const [inpNewTask, setInpNewTask] = useState<string>('')
    const [filter, setFilter] = useState<choiceFilterType>('all')

    const removeTask = (idTask: string) => {
        setTasks(() => tasks.filter(({id}) => id !== idTask))
    }

    const addTask = () => {
        if (inpNewTask && inpNewTask.trim()) {
            setTasks([
                {
                    id: v1(),
                    isDone: false,
                    title: inpNewTask
                }, ...tasks])
            setInpNewTask('')
        }
    } // Добавление таски

    const isCheck = (idTask: string) => {
        setTasks(prev => ([
            ...prev.map(item => {
                if (item.id === idTask) {
                    item.isDone = !item.isDone
                }
                return item
            })
        ]))
    } //меняем значение чекбокса

    /*const isActivTasks = () => {
        setFilterTasks([...tasks.filter(({isDone}) => !isDone)])

    }
    const isAllTasks = () => {
        setFilterTasks(tasks)
    }
    const isCompleted = () => {
        setFilterTasks([...tasks.filter(({isDone}) => isDone)])
    }*/ //Как я бы фильтровал

    const choiseFilter = (title: choiceFilterType) => {
        setFilter(title)
    }
    let choiseFilterTask = tasks

    if (filter === 'active') {
        choiseFilterTask = tasks.filter(({isDone}) => !isDone)
    }
    if (filter === 'completed') {
        choiseFilterTask = tasks.filter(({isDone}) => isDone)
    }

    return (
        <div className="App">
            <Todolist title='What is learn?' tasks={choiseFilterTask} addTask={addTask} inpNewTask={inpNewTask}
                      removeTask={removeTask} setInpNewTask={setInpNewTask} isCheck={isCheck}
                      choiseFilter={choiseFilter}
            />
        </div>
    );
};

export default App;