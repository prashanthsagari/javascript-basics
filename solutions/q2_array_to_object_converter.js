/* Write a Program to convert an array of objects to an object
	based on a given key */

	const convert = (arr, id) => {
		// Write your code here

		if(!Array.isArray(arr))
			{return null;}

		return arr.reduce((accumulation, currentValue) => {
			accumulation[currentValue[id]] = {
				id: currentValue.id,
				name: currentValue.name,
				role: currentValue.role
			};
			console.log(accumulation);
			return accumulation;
		}, {});
	};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
