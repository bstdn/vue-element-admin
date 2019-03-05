const getters = {
  language: state => state.app.language,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  avatar: state => state.user.avatar,
  addRouters: state => state.permission.addRouters
}

export default getters
