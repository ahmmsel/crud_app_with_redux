import React from 'react'
import style from "./Container.module.scss"

export default function Container(props) {
	return (
		<div className={`${style.container} ${props.className}`}>
			{props.children}
		</div>
	)
}