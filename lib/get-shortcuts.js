const path = require('path')
const wildcard = require('wildcard')

function removeDuplicates (myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

function validateIp (shortcut, myIp) {
  const include = shortcut.includeIps ? shortcut.includeIps.filter(ip => wildcard(ip, myIp)).length > 0 : true
  const exclude = shortcut.excludeIps ? shortcut.excludeIps.filter(ip => wildcard(ip, myIp)).length !== 0 : false
  return include === true && exclude === false
}

function ipFilter (shortcuts, ip) {
  return shortcuts.filter(shortcut => validateIp(shortcut, ip))
}

module.exports = (roles, ip) => {
  let shortcuts = []

  roles.map(file => {
    const data = require(path.resolve('../data/shortcuts', `${file}.json`))
    shortcuts.push(...data)
  })
  const shortcutsFiltered = ipFilter(shortcuts, ip)
  return removeDuplicates(shortcutsFiltered, 'title')
}
