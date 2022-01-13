import React from 'react'
import style from "./Input.module.scss"

export default function Input(props) {
	return <input className={props.className} type={props.type} id={props.id} placeholder={props.placeholder} onChange={props.onChange} />
}