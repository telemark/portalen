const allLinks = require('../data/links.json')

function removeDuplicates (myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

module.exports = roles => {
  let shortcuts = []

  roles.map(role => {
    if (allLinks[role]) {
      shortcuts.push(...allLinks[role])
    }
  })
  return removeDuplicates(shortcuts, 'title')
}
