import React from 'react'
import SearchInputFilter from '../../features/searchInputFilter/SearchInputFilter'
import Container from '../../shared/ui/container/Container'
import Sidebar from '../../widgets/sidebar/ui/Sidebar'
import styles from './RecipesPage.module.scss'

const RecipesPage = () => {
	return (
		<Container>
			<div className={styles.wrapper}>
				<Sidebar className={styles.sidebar} />
				<div className={styles.content}>
					<SearchInputFilter />
				</div>
			</div>
		</Container>
	)
}

export default RecipesPage
