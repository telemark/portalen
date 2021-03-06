const allShortcuts = require('../data/shortcuts')
// const wildcard = require('wildcard')

function removeDuplicates (myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

/*
function validateIp (shortcut, myIp) {
  const include = shortcut.includeIps ? shortcut.includeIps.filter(ip => wildcard(ip, myIp)).length > 0 : true
  const exclude = shortcut.excludeIps ? shortcut.excludeIps.filter(ip => wildcard(ip, myIp)).length !== 0 : false
  return include === true && exclude === false
}
*/

module.exports = (roles, ip) => {
  const shortcuts = []

  roles.map(role => {
    if (allShortcuts[role]) {
      shortcuts.push(...allShortcuts[role])
    }
  })
  // const shortcutsFiltered = shortcuts.filter(shortcut => validateIp(shortcut, ip))
  return removeDuplicates(shortcuts, 'title')
}
