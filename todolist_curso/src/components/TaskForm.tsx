import styles from './styles/TaskForm.module.css'

import { ITask } from "../interfaces/Task"
import { FormEvent, ChangeEvent, useState, useEffect } from 'react';

interface Props {
    btnText: string,
    taskList: ITask[],
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>,
    task?: ITask | null,
    handleUpdate?(id: number, title: string, difficulty: number): void
}

function TaskForm({ btnText, taskList, setTaskList, task, handleUpdate }: Props) {

    const [ id, setId ] = useState<number>(0)
    const [ title, setTitle ] = useState<string>("")
    const [ difficulty, setDifficulty ] = useState<number>(0)

    useEffect(() => {

        if(task){
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }

    }, [task])

    function addTaskHandler(e: FormEvent<HTMLFormElement>){

        e.preventDefault()
        
        if(handleUpdate){

            handleUpdate(id, title, difficulty)

        }else{

            const id = Math.floor(Math.random() * 1000)
            const newTask: ITask = {id, title, difficulty}

            setTaskList!([...taskList, newTask])
            setTitle("")
            setDifficulty(0)

        }

    }

    function handleChange(e:ChangeEvent<HTMLInputElement>){
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        }else{
            setDifficulty(parseInt(e.target.value))
        }
    }

    return (
       <form className={styles.form} onSubmit={addTaskHandler}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} value={title}/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange} value={difficulty}/>
        </div>
        <input type="submit" value={btnText}/>
       </form>
    );
}

export default TaskForm;