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

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.inner}>
					<div className={styles.cont}>
						<BurgerButton
							isOpen={isBurgerOpen}
							onClick={() => setBurgerOpen(!isBurgerOpen)}
						/>
						<Logo />
					</div>
					<Navigation isOpen={isBurgerOpen} />
					<BurgerMenu
						isOpen={isBurgerOpen}
						onClose={() => setBurgerOpen(!isBurgerOpen)}
					/>
					<UserMenu />
				</div>
			</Container>
		</header>
	)
}

export default HomeHeader
