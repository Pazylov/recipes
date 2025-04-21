import clsx from 'clsx'
import React from 'react'
import styles from './SidebarTitle.module.scss'

const SidebarTitle = ({ children, className }) => {
	return <h4 className={clsx(styles.sidebarTitle, className)}>{children}</h4>
}

export default SidebarTitle
