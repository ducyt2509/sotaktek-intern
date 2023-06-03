import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import TodoDetail from './TodoDetail';
const Todo = ({ todo, handleCheckBox }) => {
    const { data, setData } = useApp()
    const [isShow, setIsShow] = useState(false)
    const handleRemoveToDo = (id) => {
        const updatedData = data.filter(todo => todo.id !== id)
        setData(updatedData)
    }



    return (
        <div >
            <div className='w-full d-flex justify-between align-center border-bottom todo' >
                <div>
                    <input type="checkbox" id={`todo_${todo.id}`} onChange={() => handleCheckBox(todo.id)} />
                    <label htmlFor={`todo_${todo.id}`} > {todo.name}</label>
                </div>
                <div className='group-btn'>
                    <button className='btn bg-detail' onClick={() => setIsShow(isShow => !isShow)} >Details</button>
                    <button className='btn bg-red bg-remove' onClick={() => handleRemoveToDo(todo.id)}>Remove</button>
                </div>
            </div>
            <TodoDetail isShow={isShow} todo={todo} setIsShow={setIsShow} ></TodoDetail>
        </div>
    );
};

export default Todo;