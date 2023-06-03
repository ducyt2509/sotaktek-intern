import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';

const TodoDetail = ({ isShow, todo, setIsShow }) => {
    const { data, setData } = useApp()
    const [task, setTask] = useState(todo)
    const [valid, setValid] = useState(false)
    const handleChangeDate = (e) => {
        const newDate = e.target.value
        setTask({ ...task, date: newDate })

    }

    const handleChangeTaskName = (e) => {
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
        task.name !== '' && (new Date(task.date) != 'Invalid Date') ? setValid(true) : setValid(false)

    }, [task])

    const handleUpdateDetailsToDo = () => {
        const updatedData = data.map(item => {
            if (item.id === task.id) {
                return { ...item, ...task }
            }
            return item
        })
        setData(updatedData)

        setIsShow(isShow => !isShow)
    }
    return (
        <div>
            <div className={`w-full todo-detail ${!isShow ? 'd-none' : ''}`}>
                <input type="text" name='task' placeholder='Add new task ...' value={task?.name} onChange={handleChangeTaskName} />
                <div className='w-full mc  d-flex flex-column '>
                    <label htmlFor="description" >Description</label>
                    <textarea name="desc" id="description" cols="30" rows="10" value={task?.desc} onChange={handleChangeDesc}></textarea>
                </div>
                <div className='mc d-flex gap-30'>
                    <div className='col-2 d-flex flex-column'>
                        <label htmlFor="date">Due date</label>
                        <input type="date" name="date" id="date" min={new Date().toISOString().split('T')[0]} value={task?.date} onChange={handleChangeDate} />
                    </div>

                    <div className='col-2 d-flex flex-column'>
                        <label htmlFor="piority">Piority {task?.piority}</label>
                        <select name="piority" id="piority" value={task?.piority} onChange={handleChangePiority}>
                            <option value="Low">Low </option>
                            <option value="Normal">Normal </option>
                            <option value="High">High </option>
                        </select>
                    </div>
                </div>


                <div className='w-full mc'>
                    <button className={`w-full btn ${valid ? "bg-green" : "disable-btn"}`} disabled={!valid} onClick={handleUpdateDetailsToDo} >Update</button>
                </div>

            </div>
        </div>
    );
};

export default TodoDetail;