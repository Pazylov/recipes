import CartBadge from '@/features/cart/ui/cartBadge/CartBadge'
import FavoriteIcon from '@/shared/ui/icon/favoriteIcon/FavoriteIcon'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UserMenu.module.scss'

const UserMenu = ({ onClose }) => {
	return (
		<ul className={styles.userMenu}>
			<li>
				<Link to='/favorite' onClick={onClose}>
					<FavoriteIcon variant='header' />
				</Link>
			</li>
			<li>
				<Link to='/cart' onClick={onClose}>
					<CartBadge variant='header' />
				</Link>
			</li>
		</ul>
	)
}

export default UserMenu
