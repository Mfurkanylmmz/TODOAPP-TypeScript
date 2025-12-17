import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, toggleShowOnlyFavories } from "../redux/todoSlice";
import type { TodoType } from "../types/Types";
import type { RootState } from "../redux/store";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");
  const { showOnlyFavories } = useSelector((store: RootState) => store.todo)


  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Lütfen bir todo giriniz!!!");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999),
      content: newTodo,
      favory: false
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="Create-Todo..."
        className="todo-input"
        type="text"
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        Create Todo
      </button>
      <button onClick={() => dispatch(toggleShowOnlyFavories())} className="todo-create-button">{showOnlyFavories ? "Tümünü Göster" : "Favorileri Göster"} </button>
    </div>
  );
}

export default TodoCreate;
