import React from 'react'
import styles from './AdvantageItem.module.scss'

const AdvantageItem = ({ icon, desc }) => {
	return (
		<div className={styles.advantageItem}>
			<img className={styles.icon} src={icon} alt='Icon' />
			<p className={styles.description}>{desc}</p>
		</div>
	)
}

export default AdvantageItem
