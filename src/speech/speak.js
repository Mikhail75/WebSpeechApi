import VoiceInfo from "./VoiceInfo";

/**
 * @param {string} text
 * @param {!VoiceInfo} voiceInfo
 * @param {number} volume
 * @param {number} pitch
 * @param {number} rate
 */
function speak(text, voiceInfo, volume, pitch, rate) {
	if (speechSynthesis.speaking || !text)
	{
		return;
	}

	const utterance = new SpeechSynthesisUtterance(text);

	utterance.voice = getVoice(voiceInfo);
	utterance.volume = volume;
	utterance.pitch = pitch;
	utterance.rate = rate;

	speechSynthesis.speak(utterance);
}

/**
 * @param {!VoiceInfo} voiceInfo
 * @return {!SpeechSynthesisVoice}
 */
function getVoice(voiceInfo) {
	const voice = speechSynthesis.getVoices().find(
		(value) => value.name == voiceInfo.name
	);

	if (voice == undefined)
	{
		throw new Error('voice not found');
	}

	return voice;
}

export default speak;