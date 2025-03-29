import Container from '@/shared/ui/container/Container'
import Title from '@/shared/ui/title/Title'
import React from 'react'
import styles from './OurAdvantages.module.scss'
import { ADVANTAGES_LIST } from './lib/advantagesList'
import AdvantageItem from './ui/AdvantageItem'

const OurAdvantages = () => {
	return (
		<section className={styles.ourAdvantages}>
			<Container>
				<Title className={styles.advantagesTitle} variant='large'>
					Наши преимущества
				</Title>
				<div className={styles.cont}>
					{ADVANTAGES_LIST.map(item => (
						<AdvantageItem key={item.id} {...item} />
					))}
				</div>
			</Container>
		</section>
	)
}

export default OurAdvantages
