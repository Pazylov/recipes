import Footer from '@/widgets/footer/Footer'
import DefaultHeader from '@/widgets/header/DefaultHeader'
import HomeHeader from '@/widgets/header/HomeHeader'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styles from './MainLayout.module.scss'

const MainLayout = () => {
	const location = useLocation()
	const isHomePage = location.pathname === '/'
	return (
		<div className={styles.main}>
			{isHomePage ? <HomeHeader /> : <DefaultHeader />}
			<main className={styles.content}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default MainLayout
