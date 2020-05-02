import React from "react";
import Button from "./Button";

/**
 *  @typedef {{
 *    className: string,
 *    onPlayButtonClick: function(any):any,
 *    isPlaying: boolean,
 *  }} Props
 */

/**
 * @param {!Props} props
 */
function ControlPanel(props) {
	return (
		<div className={props.className}>
			<Button
				className="play-button"
				value="Speak"
				onClick={props.onPlayButtonClick}
				disabled={props.isPlaying}
			/>
		</div>
	);
}

export default ControlPanel;