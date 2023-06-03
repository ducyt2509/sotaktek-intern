import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';

const NewTask = () => {
    const { setData } = useApp()

    const [task, setTask] = useState({
        name: "",
        date: new Date().toISOString().split('T')[0],
        desc: "",
        piority: "Normal",
    })
    const [valid, setValid] = useState(false)

    const handleChangeDate = (e) => {
        const newDate = e.target.value
        setTask({ ...task, date: newDate })

    }

    const handleChangeTask = (e) => {
        const newTask = e.target.value
        setTask({ ...task, name: newTask })

    }

    const handleChangeDesc = (e) => {
        const newDesc = e.target.value
        setTask({ ...task, desc: newDesc })

    }
    const handleChangePiority = (e) => {
        const newPiority = e.target.value
        setTask({ ...task, piority: newPiority })

    }

    useEffect(() => {
        task.name !== '' ? setValid(true) : setValid(false)
    }, [task])

    const handleAddNewTask = () => {
        const data = JSON.parse(localStorage.getItem('tasks'))
        task.id = data.length + 1
        const updatedData = [...data, task];
        updatedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        setData(updatedData)
        setTask({
            name: "",
            date: new Date().toISOString().split('T')[0],
            desc: "",
            piority: "Normal",
        })
    }

    return (
        <div className='w-40 padding-common'>
            <h3 className='title'>New Task</h3>
            <input type="text" name='task' placeholder='Add new task ...' onChange={handleChangeTask} className='mc' value={task.name} />


            <div className='w-full mc  d-flex flex-column '>
                <label htmlFor="description" >Description</label>
                <textarea name="desc" id="description" cols="30" rows="10" onChange={handleChangeDesc} value={task.desc} ></textarea>
            </div>
            <div className='mc d-flex gap-30 responsive-xs'>
                <div className='col-2 d-flex flex-column'>
                    <label htmlFor="date">Due date</label>
                    <input type="date" name="date" id="date" onChange={handleChangeDate} min={new Date().toISOString().split('T')[0]} value={task.date} />
                </div>

                <div className='col-2 d-flex flex-column'>
                    <label htmlFor="piority">Piority</label>
                    <select name="piority" id="piority" onChange={handleChangePiority} value={task.piority}>
                        <option value="Low">Low </option>
                        <option value="Normal"  >Normal </option>
                        <option value="High">High </option>
                    </select>
                </div>
            </div>


            <div className='w-full mc'>
                <button className={`w-full btn ${valid ? "bg-green" : "disable-btn"}`} disabled={!valid} onClick={handleAddNewTask} >Add</button>
            </div>

        </div>
    );
};

export default NewTask;