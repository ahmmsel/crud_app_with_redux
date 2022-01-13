import React, { useState } from 'react'
import style from "./TodoItem.module.scss"
import Button from "../UI/Button"
import Input from "../UI/Input"

export default function TodoItem(props) {
	const [ toggle, setToggle ] = useState(false);

	const editTodoHandler = () => {
		setToggle(!toggle)
	}

	const date = new Date().toLocaleString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
	return (
		<li className={style.item}>
		<div className={style.content}>
			<div className={style.info}>
				<h2>{props.title}</h2>
				<small>{date}</small>
			</div>
			<div className={style.actions}>
				<Button className={`${style["edit-btn"]} bi bi-pencil-square`} onClick={editTodoHandler}></Button>
				<Button className={`${style["delete-btn"]} bi bi-trash`} onClick={props.onDelete}></Button>
			</div>
		</div>
		{toggle &&
			<div className={style.edit}>
				<Input className={style["input-edit"]} placeholder="edit" onChange={props.onChange} />
				<Button className={style['confirm-edit']} onClick={props.onConfirm}>CONFIRM</Button>
			</div>
		}

		</li>
	)
}