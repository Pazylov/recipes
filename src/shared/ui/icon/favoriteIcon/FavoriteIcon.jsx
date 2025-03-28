import clsx from 'clsx'
import { Heart } from 'lucide-react'
import styles from './FavoriteIcon.module.scss'

const FavoriteIcon = ({ variant = 'default' }) => {
	return <Heart className={clsx(styles.icon, styles[variant])} />
}

export default FavoriteIcon
