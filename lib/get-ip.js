module.exports = req => {
  if (!req) return
  if (req.headers) {
    if (req.headers['x-zeit-co-forwarded-for']) {
      return req.headers['x-zeit-co-forwarded-for']
    }
    if (req.headers['forwarded-for']) {
      return req.headers['forwarded-for']
    }
    if (req.headers['x-real-ip']) {
      return req.headers['x-real-ip']
    }
  }

  if (req.connection && req.connection.remoteAddress) {
    return req.connection.remoteAddress
  }

  if (req.socket && req.socket.remoteAddress) {
    return req.socket.remoteAddress
  }
}
