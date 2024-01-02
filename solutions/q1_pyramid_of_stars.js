/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (val) => {
     // Write your code here
     let s = '';
     let spaces = '';
     let result = '';

     for (let i = 1; i <= val; i = i + 1) {
          let sp = val - i + 1;

          for (let k = 1; k <= sp; k = k + 1) {
               spaces = spaces + ' ';
          }
          for (let j = 1; j <= i; j = j + 1) {
               if (j >= i) {
                    s = s + '* ';
               }
          }


          result = result + (spaces + s + ' \n');
          spaces = '';
     }
     return result;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
