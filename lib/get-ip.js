module.exports = req => {
  if (req.headers) {
    if (req.headers['x-forwarded']) {
      return req.headers['x-forwarded']
    }
    if (req.headers['forwarded-for']) {
      return req.headers['forwarded-for']
    }
    if (req.headers['x-client-ip']) {
      return req.headers['x-client-ip']
    }
  }

  if (req.connection && req.connection.remoteAddress) {
    return req.connection.remoteAddress
  }

  if (req.socket && req.socket.remoteAddress) {
    return req.socket.remoteAddress
  }
}
