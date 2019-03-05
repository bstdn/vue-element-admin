import Mock from 'mockjs'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    avatar: Mock.Random.image('40x40', '#409EFF', 'Avatar'),
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    avatar: Mock.Random.image('40x40', '#409EFF', 'Avatar'),
    name: 'Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  }
}
