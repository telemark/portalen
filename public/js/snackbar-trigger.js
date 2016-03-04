'use strict'

function generateMessage (input) {
  var msg = false
  if (/feedbackCollected/.test(input)) {
    msg = 'Tilbakemeldingen din er registrert. Tusen takk.'
  }
  if (/messageAdded/.test(input)) {
    msg = 'Meldingen din er lagt inn.'
  }
  if (/messageUpdated/.test(input)) {
    msg = 'Meldingen er oppdatert.'
  }
  if (/messageDeleted/.test(input)) {
    msg = 'Meldingen er slettet.'
  }
  return msg
}

function init () {
  setTimeout(function () {
    var search = window.location.search
    if (search) {
      var msg = generateMessage(search)
      if (msg) {
        var snackbarContainer = document.querySelector('.mdl-js-snackbar')
        var data = {
          message: msg,
          timeout: 2000
        }
        snackbarContainer.MaterialSnackbar.showSnackbar(data)
      }
    }
  }, 500)
}

function ready (fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(init)