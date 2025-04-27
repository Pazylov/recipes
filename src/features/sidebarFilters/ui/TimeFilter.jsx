import React from 'react'
import DropdownInput from '../../../shared/ui/dropdownInput/DropdownInput'
import { TIMES_COOKING } from '../lib/recipesTimesCooking.data'

const TimeFilter = () => {
	const handleSelectTime = time => {
		console.log('Выбрали время:', time)
	}

	return (
		<DropdownInput
			placeholder='Выберите время...'
			option={TIMES_COOKING}
			onSelect={handleSelectTime}
		/>
	)
}

export default TimeFilter
