import React from "react";

/**
 *  @typedef {{
 *    className: string,
 *    value: string,
 *    onClick: function(any):any,
 *  }} Props
 */

/**
 * @param {!Props} props
 */
function Button(props) {
	return (
		<input
			className={props.className}
			type="button"
			value={props.value}
			onClick={props.onClick}
		/>
	);
}

export default Button;