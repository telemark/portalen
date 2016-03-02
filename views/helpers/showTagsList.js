'use strict'

module.exports = function (input) {
  var tags = input.map(function (item) {
    return '<a href="/messages/tags/' + item + '">' + item + '</a>'
  })
  return '#:&nbsp' + tags.join('&nbsp|&nbsp')
}
