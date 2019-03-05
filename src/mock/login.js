import Mock from 'mockjs'
import { param2Obj } from '../utils'

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
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  }
}
