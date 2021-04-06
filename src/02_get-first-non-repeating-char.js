/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
  const chars = str.split('')
  for (const char of chars) {
    const charCount = chars.filter(i => char === i).length
    if (charCount === 1) {
      return char
    }
  }
}

module.exports = solution
