import React from 'react'
import Input from '../../../../shared/ui/input/Input'

const RangeFilter = () => {
	return (
		<div>
			<Input placeholder='от:' />
		</div>
	)
}

export default RangeFilter

/* 
  const handleInputChange = (e) => {
    let value = e.target.value.replace(",", ".");
    value = value.replace(/[^0-9.]/g, "").replace(/^([^.]*\.)|\./g, "$1");
    setMaxPrice(value);
  };
*/
