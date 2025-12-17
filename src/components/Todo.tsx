import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../css/Todo.css"
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, toggleTodoFavoryById, updateTodoById } from '../redux/todoSlice';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

interface TodoProps {
  todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

  const { id, content } = todoProps

  const [editable, setEditable] = useState<boolean>(false)

  const [newTodo, setNewTodo] = useState<string>(content)


  const dispatch = useDispatch()


  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id))
  }

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    }

    dispatch(updateTodoById(payload))
    setEditable(false)
  }
  const handleToggleFav = () => {
    dispatch(toggleTodoFavoryById(todoProps.id))
  }

  return (
    <div className='todo-edit'>

      {
        editable ? <input
          style={{ width: "400px", border: "none", borderBottom: "1px solid lightgrey", outline: "none" }}
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
          value={newTodo} /> : <div>{content} </div>
      }


      <div>
        <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icon-edit' style={{ marginRight: "5px" }} />
        {editable ? <FaCheckCircle className='icon-edit' onClick={handleUpdateTodo} /> : <FaEdit onClick={() => setEditable(!editable)} className='icon-edit' />}
        <div>
          <button onClick={handleToggleFav} style={{ background: 'none', border: 'none' }}>
            {todoProps.favory
              ? <MdFavorite style={{ color: 'red' }} />
              : <MdFavoriteBorder style={{ color: 'gray' }} />}
          </button>

        </div>
      </div>

    </div>

  )
}

export default Todo
