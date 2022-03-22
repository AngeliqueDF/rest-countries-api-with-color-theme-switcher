import React from "react";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";

const GoBackButton = () => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
	return (
		<Row>
			<button onClick={goBack}>Back</button>
		</Row>
	);
};

export default GoBackButton;
