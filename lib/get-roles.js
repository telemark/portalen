const rolesData = require('../data/roles.json')

export default company => {
  const roles = rolesData.find(role => role.id === company.toLowerCase())
  return roles ? roles.groups : []
}
