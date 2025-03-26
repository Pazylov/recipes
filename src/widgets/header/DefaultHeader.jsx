import Container from '@/shared/ui/container/Container'
import styles from './Header.module.scss'
import HomeHeader from './HomeHeader'

const DefaultHeader = () => {
	return (
		<>
			<HomeHeader />
			<Container>
				<div className={styles.border} />
			</Container>
		</>
	)
}

export default DefaultHeader
