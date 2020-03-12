import React, {useState} from "react";
import TextArea from "./TextArea";

import "../styles/App.css";

function App() {
	const [textToSpeech, setTextToSpeech] = useState("");

	return (
		<div>
			<h1>Web Speech API</h1>
			<TextArea
				className="text-to-speech-area"
				value={textToSpeech}
				onChange={setTextToSpeech}
			/>
		</div>
	);
}

export default App;