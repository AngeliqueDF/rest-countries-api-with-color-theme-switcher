/**
 * Returns the values of an object in an array.
 * @param {Object} object
 * @returns Array
 */
const mapObject = (object) => {
	const result = [];
	for (const key in object) {
		result.push(object[key]);
	}
	return result;
};

const formatNumber = (number) => number.toLocaleString("en-US");

/**
 * Adds a comma after the values in a list except for the last one.
 * @param {Array} array - The array being traversed.
 * @param {*} item - The current item.
 * @param {*} index - The current index.
 * @returns
 */
const listPunctuation = (array, item, index) => {
	return index === array.length - 1 ? item : `${item}, `;
};

module.exports = { mapObject, listPunctuation, formatNumber };
