'use strict'

function init () {
  var clearButtons = document.querySelectorAll('.messages-close-button')
  var starButtons = document.querySelectorAll('.messages-star-button')

  Array.prototype.forEach.call(clearButtons, function(el) {
    el.addEventListener('click', function (e) {
      closeMe(e)
    })
  })

  Array.prototype.forEach.call(starButtons, function(el) {
    el.addEventListener('click', function (e) {
      starMe(e)
    })
  })
}

function markMessageAsRead(messageID) {
  var xhr = new XMLHttpRequest()
  var snackbarContainer = document.querySelector('.mdl-js-snackbar')
  var data = {
    message: '',
    timeout: 2000
  }
  xhr.open('POST', '/messages/' + messageID + '/markasread', true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.onload = function() {
    data.message = xhr.responseText
    snackbarContainer.MaterialSnackbar.showSnackbar(data)
  }
  xhr.send()
}

function markMessageAsStarred(messageID) {
  var xhr = new XMLHttpRequest()
  var snackbarContainer = document.querySelector('.mdl-js-snackbar')
  var data = {
    message: '',
    timeout: 2000
  }
  xhr.open('POST', '/messages/' + messageID + '/markasstarred', true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.onload = function() {
    data.message = xhr.responseText
    snackbarContainer.MaterialSnackbar.showSnackbar(data)
  }
  xhr.send()
}

function starMe (event) {
  var starButtonId = event.path[1].id
  var messageId = starButtonId.replace('starMessage', '')
  var starButton = document.getElementById(starButtonId)

  starButton.textContent = 'star'

  markMessageAsStarred(messageId)
}

function closeMe (event) {
  var messageId = event.path[1].id.replace('clearMessage', '')
  var cardId = "messageCard" + messageId
  var card = document.getElementById(cardId)

  card.style.display = 'none'

  markMessageAsRead(messageId)
}

function ready (fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(init)