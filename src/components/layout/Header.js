import React from 'react'
import style from './Header.module.scss';
import Container from "../UI/Container";
import Button from "../UI/Button"

export default function Header() {
	return (
		<header className={style.header}>
			<Container className={style.container}>
				<div className={style.logo}>
					<h1>CRUD APP</h1>
				</div>
			</Container>
		</header>
	)
}