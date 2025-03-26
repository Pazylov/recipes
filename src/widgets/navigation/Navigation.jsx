import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.list}>
				<NavLink className={styles.link}>Главная</NavLink>
				<NavLink className={styles.link}>Рецепты</NavLink>
				<NavLink className={styles.link}>Контакты</NavLink>
			</div>
		</nav>
	)
}

export default Navigation
