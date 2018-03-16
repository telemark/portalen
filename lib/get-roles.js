const rolesData = require('./roles.json')

export default company => {
  return rolesData.find(role => role.id === company.toLowerCase()).groups
}
