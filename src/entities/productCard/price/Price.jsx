import CardTag from '@/shared/ui/cardTag/CardTag'
import clsx from 'clsx'
import styles from './Price.module.scss'

const Price = ({ originalPrice, discountPrice }) => {
	const isDiscount =
		originalPrice > 0 && discountPrice > 0 && discountPrice < originalPrice
	const isFree = originalPrice === 0 || discountPrice === 0

	return (
		<div
			className={clsx(styles.priceContainer, {
				[styles.centered]: !isDiscount,
			})}
		>
			{isDiscount && <CardTag tag={isDiscount}>Скидка</CardTag>}
			<p className={styles.price}>
				<span>Цена: </span>
				{isDiscount && (
					<span className={styles.oldPrice}>~{originalPrice} KGS~</span>
				)}
				<span
					className={clsx({
						[styles.discountedPrice]: isDiscount,
						[styles.free]: isFree,
					})}
				>
					{isFree ? 'Бесплатно' : `${discountPrice} KGS`}
				</span>
			</p>
		</div>
	)
}

export default Price
