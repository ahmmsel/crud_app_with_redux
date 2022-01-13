import React from 'react'
import style from "./Button.module.scss"

export default function Button(props) {
	return (
		<button className={`${style.btn} ${props.className}`} type={props.type || "button"} onClick={props.onClick}>
			{props.children}
		</button>
	)
}