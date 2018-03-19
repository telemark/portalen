const allLinks = require('../data/links.json')

function removeDuplicates (myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

module.exports = roles => {
  let links = []

  roles.map(role => {
    if (allLinks[role]) {
      links.push(...allLinks[role])
    }
  })

  return removeDuplicates(links, 'title')
}
