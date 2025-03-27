import UserIcon from '@/shared/ui/icon/UserIcon'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DROPDOWN_LINKS } from '../../lib/dropdownLinks.data'

import { useOutsideClick } from '@/shared/lib/hooks/useOutsideClick'
import styles from './UserDropdown.module.scss'

export const UserDropdown = () => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useOutsideClick(() => setIsOpen(false))

	return (
		<div className={styles.userDropdown} ref={dropdownRef}>
			<button onClick={() => setIsOpen(!isOpen)}>
				<UserIcon size={30} color={'#654321'} />
			</button>

			{isOpen && (
				<div className={styles.dropdownMenu}>
					{DROPDOWN_LINKS.map(link => (
						<Link className={styles.link} to={link.path} key={link.path}>
							{link.label}
						</Link>
					))}
				</div>
			)}
		</div>
	)
}
