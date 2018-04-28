import createStore from 'unistore'

import { ITracksState } from './tracks'
import { User, Playlists, Authentication } from '../spotify'

const devtools = require('unistore/devtools')

export interface IStore {
  user: User | null
  tracks: ITracksState | null
  playlists: Playlists | null
  authentication: Authentication | null
}

export default devtools(
  createStore<IStore>({
    user: null,
    tracks: null,
    playlists: null,
    authentication: null,
  })
)
