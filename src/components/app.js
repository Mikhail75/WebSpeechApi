import React, {useState} from "react";
import BaseToneFrequencyControl from "./BaseToneFrequencyControl";
import SoundFrequencyScale from "./SoundFrequencyScale";

import '../styles/App.css';

function App() {
	const [baseToneNumber] = useState(57);
	const [baseToneFrequency, setBaseToneFrequency] = useState(440);

	return (
		<div>
			<h1>Web Speech API</h1>
			// TODO
		</div>
	);
}

export default App;