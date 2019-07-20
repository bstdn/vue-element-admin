import Mock from 'mockjs'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    avatar: Mock.Random.image('40x40', '#409EFF', 'Avatar'),
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    avatar: Mock.Random.image('40x40', '#409EFF', 'Avatar'),
    name: 'Editor'
  }
}

export default [
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }
      return {
        code: 20000,
        data: token
      }
    }
  },
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },
  {
    url: '/user/logout',
    type: 'post',
    response: () => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
