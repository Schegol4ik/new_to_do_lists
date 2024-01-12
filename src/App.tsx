import React, {useState} from 'react';
import './App.css'
import {Todolist} from "./Todolist";

const App = () => {


    const [tasks, setTasks] = useState([
        {id: 1, title: "Html&Css", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ])
    const [filterTasks, setFilterTasks] = useState(tasks)
    const [inpNewTask, setInpNewTask] = useState<string>('')
    const removeTask = (idTask: number) => {
        setTasks(() => tasks.filter(({id}) => id !== idTask))
        setFilterTasks(() => filterTasks.filter(({id}) => id !== idTask))
    }

    const addTask = () => {
        setFilterTasks([...filterTasks,
            {
                id: tasks.length * 12,
                isDone: false,
                title: inpNewTask
            }])
        setInpNewTask('')
    }

    const isCheck = (idTask: number) => {
        setFilterTasks(prev => ([
            ...prev.map(item => {
                if (item.id === idTask) {
                    item.isDone = !item.isDone
                }
                return item
            })
        ]))
    }

    const isActivTasks = () => {
        setFilterTasks([...tasks.filter(({isDone}) => !isDone)])

    }

    const isAllTasks = () => {
        setFilterTasks(tasks)
    }

    const isCompleted = () => {
        setFilterTasks([...tasks.filter(({isDone}) => isDone)])
    }
    return (
        <div className="App">
            <Todolist title='What is learn?' tasks={filterTasks} addTask={addTask} inpNewTask={inpNewTask}
                      removeTask={removeTask} setInpNewTask={setInpNewTask} isCheck={isCheck}
                      isActivTasks={isActivTasks} isAllTasks={isAllTasks} isCompleted={isCompleted}
            />
        </div>
    );
};

export default App;