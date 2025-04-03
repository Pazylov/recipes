import useCartStore from '@/app/store/cart/useCartStore'
import Button from '@/shared/ui/btn/Button'
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CardButton.module.scss'

const CardButton = ({ productId, originalPrice, discountPrice, className }) => {
	const { cart, addToCart, toggleCart } = useCartStore()
	const isCart = cart.includes(productId)
	const isFree = originalPrice === 0 || discountPrice === 0

	return (
		<div className={clsx(styles.cardButtonCont, className)}>
			{isFree ? (
				<Link to={`/recipes/${productId}`}>
					<Button variant='free'>Посмотреть рецепт</Button>
				</Link>
			) : (
				<div className={styles.cont}>
					<Button
						onclick={() => toggleCart(productId)}
						variant={isCart ? 'remove-cart' : 'add-cart'}
					>
						{isCart ? 'В корзине' : 'В корзину'}
					</Button>
					<Link to='/cart'>
						<Button onclick={() => addToCart(productId)} variant='buy'>
							Купить
						</Button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default CardButton
