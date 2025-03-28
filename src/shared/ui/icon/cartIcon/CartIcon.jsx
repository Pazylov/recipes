import CartBadge from '@/features/cart/ui/cartBadge/CartBadge'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import styles from './CartIcon.module.scss'

const CartIcon = ({ variant = 'default', withBadge = false }) => {
	return (
		<div className={styles.cont}>
			<ShoppingCart className={`${styles.icon} ${styles[variant]}`} />
			{withBadge && <CartBadge />}
		</div>
	)
}

export default CartIcon
