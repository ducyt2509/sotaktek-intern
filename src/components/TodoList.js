import { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import Search from './Search';
import Todo from './Todo';

const TodoList = () => {
    const { data, setData } = useApp()
    const [search, setSearch] = useState('')
    const [todoList, setTodoList] = useState([])
    const actionRef = useRef(null)
    const [checkBoxList, setChecboxList] = useState([])

    useEffect(() => {
        if (search) {
            const updatedData = data.filter(todo => todo.name.toLowerCase().includes(search.toLowerCase()))
            setTodoList(updatedData)
        } else {
            setTodoList(data)
        }
    }, [search, data])

    const handleCheckBox = (id) => {
        var newCheckBoxList = [...checkBoxList]
        console.log('CHECK', newCheckBoxList.includes(id))
        if (newCheckBoxList.includes(id)) {
            newCheckBoxList = newCheckBoxList.filter(item => item !== id)
        } else {
            newCheckBoxList.push(id)
        }

        setChecboxList(newCheckBoxList)

    }
    useEffect(() => {
        if (checkBoxList.length > 0) {
            actionRef.current.classList.remove('d-none')
        } else {
            actionRef.current.classList.add('d-none')
        }
    }, [checkBoxList])


    const handleActionRemove = () => {
        const newData = data.filter(item => !checkBoxList.includes(item.id));
        console.log(newData)
        setData(newData)
        setChecboxList([])
    }
    return (
        <div className='w-60 posion-relative'>
            <div className='w-full padding-common'>
                <h3 className='title'>To do list</h3>

                <Search setSearch={setSearch}></Search>
                <div className='mc w-full'>
                    {todoList.length > 0 ? todoList.map(todo => (<Todo todo={todo} key={todo.id} handleCheckBox={handleCheckBox}></Todo>)) : (<p>List is empty</p>)}
                </div>


            </div>
            <div className='w-full bulk-action padding-common d-none' ref={actionRef}>
                <div>Bulk action</div>
                <div className='group-btn'>
                    <button className='btn bg-done'>Done</button>
                    <button className='btn bg-remove' onClick={handleActionRemove}>Remove</button>
                </div>



            </div>
        </div>
    );
};

export default TodoList;