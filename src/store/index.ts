import createStore from 'unistore'

import { TracksState } from './tracks'
import { User, Playlists, Authentication } from '../spotify'

const devtools = require('unistore/devtools')

export interface Store {
  user: User | null
  tracks: TracksState | null
  playlists: Playlists | null
  authentication: Authentication | null
}

export default devtools(createStore<Store>({
  user: null,
  tracks: null,
  playlists: null,
  authentication: null
}))