const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  language: state => state.app.language,
  size: state => state.app.size,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  avatar: state => state.user.avatar,
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes
}

export default getters
