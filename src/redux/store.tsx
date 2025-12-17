import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";



export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem("todos", JSON.stringify((state.todo.todos)))
  localStorage.setItem("showOnlyFavories", JSON.stringify(state.todo.showOnlyFavories))
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
