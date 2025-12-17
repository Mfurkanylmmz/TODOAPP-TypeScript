import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TodoInitialState, TodoType } from "../types/Types";

const savedTodos = localStorage.getItem("todos")



const initialState: TodoInitialState = {
  todos: savedTodos ? JSON.parse(savedTodos) : [],
  showOnlyFavories: false


};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];

    },
    removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
      state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
    },
    updateTodoById: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
    },
    toggleTodoFavoryById: (state: TodoInitialState, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo: TodoType) => todo.id == action.payload ? { ...todo, favory: !todo.favory }
        : todo)
    },
    toggleShowOnlyFavories: (state: TodoInitialState) => {
      state.showOnlyFavories = !state.showOnlyFavories
    }


  },

});

export const { createTodo,
  removeTodoById,
  updateTodoById,
  toggleTodoFavoryById,
  toggleShowOnlyFavories,
} = todoSlice.actions;

export default todoSlice.reducer;


