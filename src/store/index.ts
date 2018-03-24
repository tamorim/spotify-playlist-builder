import createStore from 'unistore'

import user, { User } from './user'
import playlists, { Playlists } from './playlists'
import authentication, { Authentication } from './authentication'

export interface Store {
  user: User,
  playlists: Playlists,
  authentication: Authentication
}

export default createStore<Store>({
  user,
  playlists,
  authentication
})