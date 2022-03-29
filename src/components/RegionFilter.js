import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const RegionFilter = ({ region, handleRegionFilter }) => {
	const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

	const handleOnchange = (e) => {
		const { textContent: regionSelected } = e.target;
		handleRegionFilter(regionSelected);
		if (region === regionSelected) {
			handleRegionFilter("");
		}
	};
	return (
		<>
			<Dropdown>
				<Dropdown.Toggle className="region-toggle">
					Filter by <span className="uppercase">r</span>egion
				</Dropdown.Toggle>

				<Dropdown.Menu className="region-menu">
					{regions.map((regionOption, i) => (
						<Dropdown.Item
							className="region-item"
							active={regionOption === region ? true : false}
							onClick={handleOnchange}
							key={regionOption}
							eventKey={regionOption}
						>
							{regionOption}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
};

export default RegionFilter;
