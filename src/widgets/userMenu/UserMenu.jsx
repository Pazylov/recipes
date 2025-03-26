import CartIcon from '@/shared/ui/icon/CartIcon'
import FavoriteIcon from '@/shared/ui/icon/FavoriteIcon'
import UserIcon from '@/shared/ui/icon/UserIcon'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './UserMenu.module.scss'

const UserMenu = () => {
	return (
		<ul className={styles.userMenu}>
			<NavLink to='/favorite'>
				<FavoriteIcon size={30} color={'#654321'} />
			</NavLink>
			<NavLink to='/cart'>
				<CartIcon size={30} color={'#654321'} />
			</NavLink>
			<NavLink to='/profile'>
				<UserIcon size={30} color={'#654321'} />
			</NavLink>
		</ul>
	)
}

export default UserMenu
