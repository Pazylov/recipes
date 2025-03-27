import React from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../lib/navLink.data'
import styles from './BurgerMenu.module.scss'

const BurgerMenu = ({ isOpen, onClose }) => {
	return (
		<nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
			<div className={styles.list}>
				{NAV_LINKS.map(link => (
					<NavLink
						onClick={onClose}
						key={link.path}
						to={link.path}
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						{link.label}
					</NavLink>
				))}
			</div>
		</nav>
	)
}

export default BurgerMenu
