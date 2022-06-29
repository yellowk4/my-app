import React, { useState } from "react";

const Counter = () => {
	const [txtValue, setTextValue] = useState("");

	const onChange = (e) => {
		setTextValue(e.target.value)
	};

	return (
		<div>
			<input type="text" value={txtValue} onChange={onChange} />
			<p>{txtValue}</p>
		</div>
	);
};

export default Counter;