import clsx from 'clsx'
import React from 'react'
import { SOCIAL_LINKS } from '../lib/socialLinks.data'
import styles from './SocialLinks.module.scss'

const SocialLinks = ({ className }) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			{SOCIAL_LINKS.map(item => (
				<a
					className={styles.icon}
					key={item.label}
					href={item.url}
					target='_blank'
					rel='noreferrer noopener'
					aria-label={item.label}
				>
					<img src={item.icon} alt={item.label} />
				</a>
			))}
		</div>
	)
}

export default SocialLinks
