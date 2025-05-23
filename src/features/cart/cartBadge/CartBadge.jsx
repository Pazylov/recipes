import React from 'react'

import { useCartStore } from '@/app/store/stores'
import CartIcon from '@/shared/ui/icon/cartIcon/CartIcon'
import styles from './CartBadge.module.scss'

const CartBadge = ({ variant }) => {
	const itemCount = useCartStore(state => state.cart.length)

	return (
		<div className={styles.cont}>
			<CartIcon variant={variant} />
			{itemCount === 0 ? null : (
				<span className={styles.badge}>{itemCount > 9 ? '9+' : itemCount}</span>
			)}
		</div>
	)
}

export default CartBadge
