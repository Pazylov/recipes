import Container from '@/shared/ui/container/Container'
import Logo from '@/shared/ui/logo/Logo'
import SocialLinks from '@/shared/ui/socialLinks/ui/SocialLinks'
import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.footerContainer}>
				<Logo className={styles.footerLogo} variant='footer' />
				<h3 className={styles.title}>Мы в соцсетях</h3>
				<SocialLinks className={styles.footerSocialLinks} />
				<p className={styles.copyright}>© 2025 Все права защищены.</p>
			</Container>
		</footer>
	)
}

export default Footer
