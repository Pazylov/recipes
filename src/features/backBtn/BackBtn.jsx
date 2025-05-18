import clsx from 'clsx'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import styles from './BackBtn.module.scss'

const BackBtn = ({ className }) => {
	const navigate = useNavigate()

	return (
		<button
			className={clsx(styles.backBtn, className)}
			onClick={() => navigate(-1)}
		>
			<ChevronLeft />
			Назад
		</button>
	)
}

export default BackBtn
