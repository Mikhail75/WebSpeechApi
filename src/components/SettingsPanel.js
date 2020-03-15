import React from "react";
import Select from "./Select";
import VoiceInfo from "../speech/VoiceInfo";

/**
 *  @typedef {{
 *    voices: !Array<!VoiceInfo>,
 *    selectedVoice: number,
 *    onVoiceChange: function(number):any,
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
		</div>
	);
}

export default SettingsPanel;