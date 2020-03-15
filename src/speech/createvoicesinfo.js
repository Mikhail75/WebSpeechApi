import VoiceInfo from "./VoiceInfo";

/**
 * @return {!Array<!VoiceInfo>}
 */
function createVoicesInfo() {
	return speechSynthesis.getVoices().map(
		(voice) => new VoiceInfo(voice.name, voice.lang)
	);
}

export default createVoicesInfo;