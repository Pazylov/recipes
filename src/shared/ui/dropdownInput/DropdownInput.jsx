import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import ClockIcon from '../icon/clockIcon/ClockIcon'
import styles from './DropdownInput.module.scss'

const DropdownInput = ({
	placeholder = 'Выберите',
	option,
	onSelect,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState(null)

	const toggleDropdown = () => setIsOpen(prev => !prev)

	const handleSelect = option => {
		setSelected(option)
		onSelect?.(option)
		setIsOpen(false)
	}

	return (
		<div className={clsx(styles.dropdown, className)}>
			<div
				className={clsx(styles.inputBox, isOpen ? styles.inputBoxOpen : '')}
				onClick={toggleDropdown}
			>
				<ClockIcon size='16px' className={styles.icon} />

				<span className={selected ? styles.selected : styles.placeholder}>
					{selected || placeholder}
				</span>
				<ChevronRight
					className={clsx(styles.arrow, isOpen ? styles.arrowRotate : '')}
				/>
			</div>

			{isOpen && (
				<div className={styles.menu}>
					{option.map((opt, idx) => (
						<div
							key={idx}
							className={clsx(styles.option, selected === opt && styles.active)}
							onClick={() => handleSelect(opt)}
						>
							{opt}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default DropdownInput
