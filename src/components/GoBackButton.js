import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
	return (
		<div>
			<button className="back-button" onClick={goBack}>
				Back
			</button>
		</div>
	);
};

export default GoBackButton;
