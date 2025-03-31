import Container from '@/shared/ui/container/Container'
import Title from '@/shared/ui/title/Title'
import React from 'react'
import styles from './PopularRecipes.module.scss'

const PopularRecipes = () => {
	return (
		<section className={styles.popular}>
			<Container>
				<Title className={styles.popularTitle} variant='large'>
					Попробуйте наши лучшие рецепты!
				</Title>
				<div className={styles.cont}></div>
			</Container>
		</section>
	)
}

export default PopularRecipes
