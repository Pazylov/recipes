import React from 'react'
import useCartStore from '../../model/cartStore'
import styles from './CartBadge.module.scss'

const CartBadge = () => {
	const itemCount = useCartStore(state => state.items.length)

	if (itemCount === 0) return null
	return (
		<span className={styles.badge}>{itemCount > 9 ? '9+' : itemCount}</span>
	)
}

export default CartBadge
