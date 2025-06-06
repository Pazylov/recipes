import { useEffect, useRef } from 'react'

export const useOutsideClick = callback => {
	const ref = useRef(null)

	useEffect(() => {
		const handleClick = e => {
			if (ref.current && !ref.current.contains(e.target)) {
				callback()
			}
		}

		document.addEventListener('mousedown', handleClick)
		return () => document.removeEventListener('mousedown', handleClick)
	}, [callback])

	return ref
}
