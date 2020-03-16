import React from "react";
import Button from "./Button";

/**
 *  @typedef {{
 *    className: string,
 *    onPlayButtonClick: function(any):any,
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
				value="Play"
				onClick={props.onPlayButtonClick}
			/>
		</div>
	);
}

export default ControlPanel;