import React from 'react'
import style from "./TodoForm.module.scss"
import Input from "../UI/Input"
import Button from "../UI/Button"

export default function TodoForm(props) {
	return (
		<form onSubmit={props.onSubmit}>
			<Input type="text" placeholder="type something" value={props.value} onChange={props.onChange} />
			<Button type="submit" className={style["add-btn"]}>ADD</Button>
		</form>
	)
}