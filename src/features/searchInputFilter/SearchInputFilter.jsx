import React, { useState } from 'react'
import SearchInput from '../../shared/ui/input/searchInput/SearchInput'

const SearchInputFilter = ({ className }) => {
	const [search, setSearch] = useState('')

	return (
		<SearchInput
			className={className}
			value={search}
			onChange={e => setSearch(e.target.value)}
			// autoFocus
		/>
	)
}

export default SearchInputFilter
