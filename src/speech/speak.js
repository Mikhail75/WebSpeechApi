import VoiceInfo from "./VoiceInfo";

/**
 * @param {{
 *   text: string,
 *   voiceInfo: !VoiceInfo,
 *   volume: number,
 *   pitch: number,
 *   rate: number,
 *   onStart: function():void,
 *   onEnd: function():void,
 * }} args
 */
function speak({text, voiceInfo, volume, pitch, rate, onStart, onEnd}) {
	if (speechSynthesis.speaking || !text)
	{
		return;
	}

	const utterance = new SpeechSynthesisUtterance(text);

	utterance.voice = getVoice(voiceInfo);

	utterance.volume = volume;
	utterance.pitch = pitch;
	utterance.rate = rate;

	utterance.onstart = onStart;
	utterance.onend = onEnd;

	speechSynthesis.speak(utterance);
}

/**
 * @param {!VoiceInfo} voiceInfo
 * @return {!SpeechSynthesisVoice}
 */
function getVoice(voiceInfo) {
	const voice = speechSynthesis.getVoices().find(
		(value) => value.name == voiceInfo.name,
	);

	if (voice == undefined)
	{
		throw new Error('voice not found');
	}

	return voice;
}

export default speak;