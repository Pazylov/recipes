import { Heart } from 'lucide-react'
import styles from './FavoriteIcon.module.scss'

const FavoriteIcon = ({ variant = 'default' }) => {
	return <Heart className={`${styles.icon} ${styles[variant]}`} />
}

export default FavoriteIcon
