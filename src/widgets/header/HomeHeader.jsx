import Container from '@/shared/ui/container/Container'
import Logo from '@/shared/ui/logo/Logo'
import React from 'react'
import Navigation from '../navigation/Navigation'
import UserMenu from '../userMenu/UserMenu'
import styles from './Header.module.scss'

const HomeHeader = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.inner}>
					<Logo />
					<Navigation />
					<UserMenu />
				</div>
			</Container>
		</header>
	)
}

export default HomeHeader
