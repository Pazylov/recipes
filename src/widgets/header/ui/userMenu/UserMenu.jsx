import CartIcon from '@/shared/ui/icon/cartIcon/CartIcon'
import FavoriteIcon from '@/shared/ui/icon/favoriteIcon/FavoriteIcon'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UserMenu.module.scss'

const UserMenu = () => {
	return (
		<ul className={styles.userMenu}>
			<Link to='/favorite'>
				<FavoriteIcon variant={'header'} />
			</Link>
			<Link to='/cart'>
				<CartIcon variant={'header'} />
			</Link>
		</ul>
	)
}

export default UserMenu
