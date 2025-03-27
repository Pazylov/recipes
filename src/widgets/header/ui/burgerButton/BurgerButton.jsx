import { Menu, X } from 'lucide-react'
import React from 'react'
import styles from './BurgerButton.module.scss'

const BurgerButton = ({ isOpen, onClick }) => {
	return (
		<button className={styles.burger} onClick={onClick}>
			{isOpen ? <X /> : <Menu />}
		</button>
	)
}

export default BurgerButton
