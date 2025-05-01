import clsx from 'clsx'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import styles from './SearchInput.module.scss'

const SearchInput = ({
	value,
	onChange,
	placeholder = 'Поиск...',
	className,
	autoFocus,
	...props
}) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<div className={clsx(styles.searchInput, className)}>
			<input
				type='text'
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				autoFocus={autoFocus}
				{...props}
			/>
			{!isFocused && <Search className={styles.searchIcon} />}
		</div>
	)
}

export default SearchInput
