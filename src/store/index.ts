import createStore from 'unistore'

import playlists, { Playlists } from './playlists'
import authentication, { Authentication } from './authentication'

export interface Store {
  playlists: Playlists,
  authentication: Authentication
}

export default createStore<Store>({
  playlists,
  authentication
})