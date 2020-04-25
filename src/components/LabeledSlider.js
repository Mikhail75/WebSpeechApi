import React from "react";
import Slider from "./Slider";

/**
 *  @typedef {{
 *    className: string,
 *    labelClassName: string,
 *    sliderClassName: string,
 *    label: string,
 *    min: number,
 *    max: number,
 *    step: number,
 *    value: number,
 *    onChange: function(number):any,
 *  }} Props
 */

/**
 * @param {!Props} props
 * @return {!JSX.Element}
 */
function label(props) {
	return (
		<div className={props.labelClassName}>
			{`${props.label}: ${props.value}`}
		</div>
	);
}

/**
 * @param {!Props} props
 * @return {!JSX.Element}
 */
function slider(props) {
	return (
		<Slider
			className={props.sliderClassName}
			min={props.min}
			max={props.max}
			value={props.value}
			step={props.step}
			onChange={props.onChange}
		/>
	);
}

/**
 * @param {!Props} props
 */
function LabeledSlider(props) {
	return (
		<div className={props.className}>
			{label(props)}
			{slider(props)}
		</div>
	);
}

export default LabeledSlider;