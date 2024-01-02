/* Write a Program to Flatten a given n-dimensional array */

let flatten = (arr) => {
  if (!Array.isArray(arr)) { return null; }

  return arr.reduce((accumulation, oneItem) => {
    return accumulation.concat(Array.isArray(oneItem) ? flatten(oneItem) : oneItem);
  }, []);
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
