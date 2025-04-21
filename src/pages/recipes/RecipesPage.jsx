import React from 'react'
import Container from '../../shared/ui/container/Container'
import Sidebar from '../../widgets/sidebar/ui/Sidebar'
import styles from './RecipesPage.module.scss'

const RecipesPage = () => {
	return (
		<Container>
			<Sidebar className={styles.sidebar} />
		</Container>
	)
}

export default RecipesPage
