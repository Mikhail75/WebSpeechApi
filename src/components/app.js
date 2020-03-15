import React, {useState} from "react";
import TextArea from "./TextArea";
import SettingsPanel from "./SettingsPanel";
import ControlPanel from "./ControlPanel";
import createVoicesInfo from "../speech/createvoicesinfo";

import "../styles/App.css";

function App() {
	const [textToSpeech, setTextToSpeech] = useState("");
	const [voices, setVoices] = useState(createVoicesInfo());
	const [selectedVoice, setSelectedVoice] = useState(0);

	if (speechSynthesis.onvoiceschanged !== undefined)
	{
		speechSynthesis.onvoiceschanged = () => setVoices(createVoicesInfo());
	}

	return (
		<div>
			<h1>Web Speech API</h1>
			<TextArea
				className="text-to-speech-area"
				value={textToSpeech}
				onChange={setTextToSpeech}
			/>
			<SettingsPanel
				className="settings-panel"
				settings={{
					voices,
					selectedVoice,
					onVoiceChange: (index) => setSelectedVoice(index),
				}}
			/>
			<ControlPanel
				className="control-panel"
			/>
		</div>
	);
}

export default App;