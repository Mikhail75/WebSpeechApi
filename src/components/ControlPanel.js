import React from "react";

/**
 *  @typedef {{
 *    className: string,
 *  }} Props
 */

/**
 * @param {!Props} props
 */
function ControlPanel(props) {
	return (
		<div className={props.className}>
			Control Panel
		</div>
	);
}

export default ControlPanel;