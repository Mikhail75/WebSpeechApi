import React from "react";

/**
 *  @typedef {{
 *    className: string,
 *    min: number,
 *    max: number,
 *    step: number,
 *    value: number,
 *    onChange: function(number):any,
 *  }} Props
 */

/**
 * @param {!Props} props
 */
function Slider(props) {
	/** @param {!React.ChangeEvent<HTMLInputElement>} event */
	const onChange = (event) => {
		props.onChange(parseFloat(event.target.value));
	};

	return (
		<input
			className={props.className}
			type="range"
			min={props.min}
			max={props.max}
			value={props.value}
			step={props.step}
			onChange={onChange}
		/>
	);
}

export default Slider;