import Container from '@/shared/ui/container/Container'
import Logo from '@/shared/ui/logo/Logo'
import React, { useState } from 'react'

import BurgerButton from './burgerButton/BurgerButton'
import BurgerMenu from './burgerMenu/BurgerMenu'
import styles from './Header.module.scss'
import Navigation from './navigation/Navigation'
import UserMenu from './userMenu/UserMenu'

const HomeHeader = () => {
	const [isBurgerOpen, setBurgerOpen] = useState(false)
	const toggleBurger = () => setBurgerOpen(prev => !prev)
	const onCloseBurgerMenu = () => setBurgerOpen(false)

	return (
		<header className={styles.header}>
			<Container className={styles.headerContainer}>
				<div className={styles.cont}>
					<BurgerButton isOpen={isBurgerOpen} onClick={toggleBurger} />
					<Logo variant='header' />
				</div>
				<Navigation isOpen={isBurgerOpen} />
				<BurgerMenu isOpen={isBurgerOpen} onClose={onCloseBurgerMenu} />
				<UserMenu onClose={onCloseBurgerMenu} />
			</Container>
		</header>
	)
}

export default HomeHeader
