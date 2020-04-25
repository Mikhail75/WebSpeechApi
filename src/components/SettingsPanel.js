import React from "react";
import Select from "./Select";
import VoiceInfo from "../speech/VoiceInfo";
import LabeledSlider from "./LabeledSlider";

/**
 *  @typedef {{
 *    voices: !Array<!VoiceInfo>,
 *    selectedVoice: number,
 *    rate: number,
 *    pitch: number,
 *    volume: number,
 *    onVoiceChange: function(number):any,
 *    onRateChange: function(number):any,
 *    onPitchChange: function(number):any,
 *    onVolumeChange: function(number):any,
 *  }} Settings
 */

/**
 *  @typedef {{
 *    className: string,
 *    settings: !Settings,
 *  }} Props
 */

/**
 * @param {!Props} props
 */
function SettingsPanel(props) {
	return (
		<div className={props.className}>
			<Select
				className="voice-selection"
				voices={props.settings.voices}
				selectedVoice={props.settings.selectedVoice}
				onChange={props.settings.onVoiceChange}
			/>
			<LabeledSlider
				className="labeled-slider"
				labelClassName="labeled-slider-label"
				sliderClassName="labeled-slider-input"
				label="Rate"
				min={0.1}
				max={2}
				step={0.1}
				value={props.settings.rate}
				onChange={props.settings.onRateChange}
			/>
			<LabeledSlider
				className="labeled-slider"
				labelClassName="labeled-slider-label"
				sliderClassName="labeled-slider-input"
				label="Pitch"
				min={0.1}
				max={2}
				step={0.1}
				value={props.settings.pitch}
				onChange={props.settings.onPitchChange}
			/>
			<LabeledSlider
				className="labeled-slider"
				labelClassName="labeled-slider-label"
				sliderClassName="labeled-slider-input"
				label="Volume"
				min={0}
				max={1}
				step={0.1}
				value={props.settings.volume}
				onChange={props.settings.onVolumeChange}
			/>
		</div>
	);
}

export default SettingsPanel;