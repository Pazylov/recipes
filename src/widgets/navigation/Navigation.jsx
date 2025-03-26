import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.list}>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
				>
					Главная
				</NavLink>
				<NavLink
					to='recipes'
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
				>
					Рецепты
				</NavLink>
				<NavLink
					to='contacts'
					className={({ isActive }) =>
						isActive ? `${styles.link} ${styles.active}` : styles.link
					}
				>
					Контакты
				</NavLink>
			</div>
		</nav>
	)
}

export default Navigation
