import CartIcon from '@/shared/ui/icon/cartIcon/CartIcon'
import React from 'react'

import { useCartStore } from '@/app/store/stores'
import styles from './CartBadge.module.scss'

const CartBadge = ({ variant }) => {
	const itemCount = useCartStore(state => state.items.length)

	if (itemCount === 0) return null
	return (
		<div className={styles.cont}>
			<CartIcon variant={variant} />
			<span className={styles.badge}>{itemCount > 9 ? '9+' : itemCount}</span>
		</div>
	)
}

export default CartBadge
