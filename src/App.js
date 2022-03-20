import countriesService from "./services/countries";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
	const [countries, setCountries] = useState([]);
	// getting countries and their information from the API
	useEffect(async () => {
		try {
			const response = await countriesService.getAll();
			setCountries(response.data);
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<div>
			<Header />
		</div>
	);
}

export default App;
