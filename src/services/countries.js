import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/";

const getAll = async () => {
	const countries = await axios.get(`${baseUrl}/all`);

	return countries;
};

export default { getAll };
