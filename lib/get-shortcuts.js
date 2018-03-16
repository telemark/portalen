const fs = require('fs')
const path = require('path')
const isJson = file => file.endsWith('.json')
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
  const files = roles ? roles : fs.readdirSync('../data/shortcuts').filter(isJson)
  let shortcuts = []

  files.map(file => {
    if (!isJson(file)) {
      file = file + '.json'
    }
    const data = require(path.resolve('../data/shortcuts', file))
    shortcuts.push(...data)
  })
  const shortcutsFiltered = ipFilter(shortcuts, ip)
  const shortcutsUnique = removeDuplicates(shortcutsFiltered, 'title')
  return shortcutsUnique
}
