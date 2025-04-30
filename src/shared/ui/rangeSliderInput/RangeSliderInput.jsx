import React, { useEffect, useRef, useState } from 'react'
import styles from './RangeSliderInput.module.scss'

const RangeSliderInput = ({ min, max, step, onChange }) => {
	const [minVal, setMinVal] = useState(min)
	const [maxVal, setMaxVal] = useState(max)
	const range = useRef(null)

	useEffect(() => {
		if (range.current) {
			const percent1 = ((minVal - min) / (max - min)) * 100
			const percent2 = ((maxVal - min) / (max - min)) * 100
			range.current.style.left = `${percent1}%`
			range.current.style.width = `${percent2 - percent1}%`
		}
		onChange?.([minVal, maxVal])
	}, [minVal, maxVal])

	const handleMinInput = value => {
		let val = Number(value)
		if (isNaN(val)) return
		if (val < min) val = min
		if (val > maxVal - step) val = maxVal - step
		setMinVal(val)
	}

	const handleMaxInput = value => {
		let val = Number(value)
		if (isNaN(val)) return
		if (val > max) val = max
		if (val < minVal + step) val = minVal + step
		setMaxVal(val)
	}

	return (
		<div className={styles.rangeSlider}>
			<div className={styles.wrapper}>
				<div className={styles.input}>
					<input
						placeholder='от:'
						type='number'
						value={minVal}
						step={step}
						min={min}
						max={maxVal - step}
						onChange={e => handleMinInput(e.target.value)}
					/>
					<span className={styles.placeholder}>от:</span>
				</div>

				<div className={styles.input}>
					<input
						placeholder='до:'
						type='number'
						value={maxVal}
						step={step}
						min={minVal + step}
						max={max}
						onChange={e => handleMaxInput(e.target.value)}
					/>
					<span className={styles.placeholder}>до:</span>
				</div>
			</div>

			<div className={styles.slider}>
				<div className={styles.track}></div>
				<div ref={range} className={styles.range}></div>

				<input
					type='range'
					min={min}
					max={max}
					step={step}
					value={minVal}
					onChange={e =>
						setMinVal(Math.min(Number(e.target.value), maxVal - step))
					}
					className={styles.thumb}
				/>
				<input
					type='range'
					min={min}
					max={max}
					step={step}
					value={maxVal}
					onChange={e =>
						setMaxVal(Math.max(Number(e.target.value), minVal + step))
					}
					className={styles.thumb}
				/>
			</div>
		</div>
	)
}

export default RangeSliderInput
