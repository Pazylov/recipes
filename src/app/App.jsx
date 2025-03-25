import Footer from '@/widgets/footer/Footer'
import Header from '@/widgets/header/Header'
import React from 'react'
import styles from './App.module.scss'
import { AppRouter } from './providers/router'
import './styles/global.scss'

const App = () => {
	return (
		<>
			<div className={styles.app}>
				<Header />
				<main className={styles.main}>
					<AppRouter />
				</main>
				<Footer />
			</div>
		</>
	)
}

export default App
