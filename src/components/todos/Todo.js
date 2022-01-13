import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todo"
import style from "./Todo.module.scss"
import Container from "../UI/Container"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

export default function Todo() {
	const [ todoValue, setTodoValue ] = useState("");

	const [ newTodoValue, setNewTodoValue ] = useState("");

	const { addTodo, deleteTodo, updateTodo } = todoActions;

	const dispatch = useDispatch()

	const todoList = useSelector(state => state.todo.todoData);

	const todoValueHandler = (e) => {
		setTodoValue(e.target.value)
	}

	const newTodoValueHandler = (e) => {
		setNewTodoValue(e.target.value)
		console.log(e.target.value)
	}

	const addTodoHandler = (e) => {
		e.preventDefault();
		if (todoValue.trim().length > 0) {		
			dispatch(addTodo({id: Math.random(), title: todoValue}))
		}
	}

	const deleteTodoHandler = (id) => {
		dispatch(deleteTodo({id}))
	}

	const updateTodoHandler = (id) => {
		if (newTodoValue.trim().length > 0) {			
			dispatch(updateTodo({id: id, title: newTodoValue}))
		}
	}

	return (
		<>
			<Container className={style.container}>
				<TodoForm onSubmit={addTodoHandler} value={todoValue} onChange={todoValueHandler} />
				<ul className={style.list}>
					{todoList.map(todo => (
						<TodoItem 
							onDelete={deleteTodoHandler.bind(null, todo.id)}
							onChange={newTodoValueHandler} 
							onConfirm={updateTodoHandler.bind(null, todo.id)}
							key={todo.id} 
							title={todo.title} 
						/>
					))
					}
				</ul>
			</Container>
		</>
	)
}