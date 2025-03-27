import { ShoppingCart } from 'lucide-react'
import React from 'react'
import styles from './CartIcon.module.scss'

const CartIcon = ({ variant = 'default' }) => {
	return <ShoppingCart className={`${styles.icon} ${styles[variant]}`} />
}

export default CartIcon
