import Button from '@/shared/ui/btn/Button'
import Container from '@/shared/ui/container/Container'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
	return (
		<section className={styles.hero}>
			<Container>
				<div className={styles.content}>
					<h1 className={styles.title}>Лучшие рецепты домашней выпечки</h1>
					<p className={styles.text}>
						Готовьте с удовольствием по проверенным рецептам! Пошаговые
						инструкции, секреты вкусной выпечки и вдохновение для ваших
						кулинарных шедевров.
					</p>
					<Link to='/recipes'>
						<Button>Смотреть рецепты</Button>
					</Link>
				</div>
			</Container>
		</section>
	)
}

export default HeroSection
