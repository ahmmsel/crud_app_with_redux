import { createSlice } from "@reduxjs/toolkit";

const DATA = [
	{
		id: Date.now().toString(20),
		title: "using redux",
		isDone: false
	}
]

export const todoSlice = createSlice({
	name: "todo",
	initialState: {todoData: DATA},
	reducers: {
		addTodo(state, action) {
			state.todoData.push(action.payload)
		},

		deleteTodo(state, action) {
			state.todoData = state.todoData.filter(todoItem => todoItem.id !== action.payload.id);
		},

		updateTodo(state, action) {
			state.todoData.map(todoItem => {
				if (todoItem.id === action.payload.id) {
					todoItem.title = action.payload.title
				}
			})
		}
	}
})

export const todoActions = todoSlice.actions

export default todoSlice.reducer