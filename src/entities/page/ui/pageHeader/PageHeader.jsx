import BackBtn from '@/features/backBtn/backBtn'
import PageTitle from '@/shared/ui/pageTitle/PageTitle'
import React from 'react'
import styles from './PageHeader.module.scss'

const PageHeader = ({ children, variant }) => {
	return (
		<div className={styles.pageHeader}>
			<BackBtn className={styles.pageHeaderBtn} />
			<PageTitle className={styles.pageHeaderTitle} variant={variant}>
				{children}
			</PageTitle>
		</div>
	)
}

export default PageHeader
