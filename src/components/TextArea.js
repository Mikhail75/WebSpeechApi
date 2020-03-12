import React from "react";

/**
 *  @typedef {{
 *    className: string,
 *    value: string,
 *    onChange: function(string):any,
 *  }} Props
 */

/**
 * @param {!Props} props
 */
function TextArea(props) {
	/** @param {!React.ChangeEvent<HTMLTextAreaElement>} event */
	const onChange = (event) => {
		props.onChange(event.target.value);
	};

	return (
		<textarea
			className={props.className}
			value={props.value}
			onChange={onChange}
		/>
	);
}

export default TextArea;