import React, {useState} from "react";
import TextArea from "./TextArea";
import SettingsPanel from "./SettingsPanel";
import ControlPanel from "./ControlPanel";
import createVoicesInfo from "../speech/createvoicesinfo";
import speak from "../speech/speak";

import "../styles/App.css";

function App() {
	const [text, setText] = useState("");
	const [voices, setVoices] = useState(createVoicesInfo());
	const [selectedVoice, setSelectedVoice] = useState(0);
	const [rate, setRate] = useState(1);
	const [pitch, setPitch] = useState(1);
	const [volume, setVolume] = useState(1);

	if (speechSynthesis.onvoiceschanged !== undefined)
	{
		speechSynthesis.onvoiceschanged = () => setVoices(createVoicesInfo());
	}

	return (
		<div>
			<h1>Web Speech API</h1>
			<TextArea
				className="text-to-speech-area"
				value={text}
				onChange={setText}
			/>
			<SettingsPanel
				className="settings-panel"
				settings={{
					voices,
					selectedVoice,
					rate,
					pitch,
					volume,
					onVoiceChange: (index) => setSelectedVoice(index),
					onRateChange: (value) => setRate(value),
					onPitchChange: (value) => setPitch(value),
					onVolumeChange: (value) => setVolume(value),
				}}
			/>
			<ControlPanel
				className="control-panel"
				onPlayButtonClick={() => speak(text, voices[selectedVoice], volume, pitch, rate)}
			/>
		</div>
	);
}

export default App;