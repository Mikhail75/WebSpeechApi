import React from "react";
import SoundFrequency from "./SoundFrequency";
import {getSoundNotation} from "../model/Notation";
import {calculateFrequency, frequencyToString} from "../model/calculatefrequencies";

/**
 *  @typedef {{
 *    baseToneNumber: number,
 *    baseToneFrequency: number,
 *  }} Props
 */

/**
 * @param {number} toneNumber
 * @param {!Props} props
 */
function soundFrequencyClassName(toneNumber, props) {
	const modifier = toneNumber == props.baseToneNumber ? '_base-tone' : '';
	return `sound-frequency${modifier}`;
}

/**
 * @param {!Props} props
 * @return {!Array<!JSX.Element>}
 */
function createSoundFrequencies(props) {
	const frequencies = [];

	for (let i = 45; i < 70; ++i)
	{
		const frequency = calculateFrequency(i, props.baseToneNumber, props.baseToneFrequency);

		frequencies.push(<SoundFrequency
			key={i}
			className={soundFrequencyClassName(i, props)}
			sound={getSoundNotation(i)}
			frequency={frequencyToString(frequency)}
		/>);
	}

	return frequencies;
}

/**
 * @param {!Props} props
 */
function SoundFrequencyScale(props) {
	return (
		<div className="sound-frequency-scale">
			{...createSoundFrequencies(props)}
		</div>
	);
}

export default SoundFrequencyScale;