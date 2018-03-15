const axios = require('axios')

export default async company => {
  const url = `https://roles.portalen.win/roles?company=${company}`
  const { data } = await axios(url)
  return data
}
