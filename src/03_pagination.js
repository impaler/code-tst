/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  const start = pageNumber <= 0 ? 0 : (pageNumber - 1) * itemsPerPage
  let end = itemsPerPage
  const itemCount = start + end
  const hasPartialResults = start < pageData.length

  if (itemCount > pageData.length && !hasPartialResults) {
    return null
  }

  if (hasPartialResults && itemCount > pageData.length) {
    end = pageData.length - start
  }

  return [...pageData].splice(start, end)
}

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

module.exports = { solution, data }
