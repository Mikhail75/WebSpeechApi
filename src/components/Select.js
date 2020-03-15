import React from "react";
import VoiceInfo from "../speech/VoiceInfo";

/**
 *  @typedef {{
 *    className: string,
 *    voices: !Array<!VoiceInfo>,
 *    selectedVoice: number,
 *    onChange: function(number):any,
 *  }} Props
 */

/**
 * @param {!Props} props
 */
function Select(props) {
	/** @param {!React.ChangeEvent<HTMLSelectElement>} event */
	const onChange = (event) => props.onChange(event.target.selectedIndex);

	return (
		<select
			className={props.className}
			value={createSelectValue(props.voices, props.selectedVoice)}
			onChange={onChange}
		>
			{...createOptions(props.voices)}
		</select>
	);
}

/**
 * @param {!Array<!VoiceInfo>} voices
 * @return {!Array<!JSX.Element>}
 */
function createOptions(voices) {
	return voices.map(
		(voice, index) => <option key={index}>{createOptionValue(voice)}</option>
	);
}

/**
 * @param {!VoiceInfo} voice
 * @return {string}
 */
function createOptionValue(voice) {
	return `${voice.name} (${voice.language})`;
}

/**
 * @param {!Array<!VoiceInfo>} voices
 * @param {number} selectedVoice
 */
function createSelectValue(voices, selectedVoice) {
	if (voices.length)
	{
		return createOptionValue(voices[selectedVoice]);
	}
	return '';
}

export default Select;