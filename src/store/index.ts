import createStore from 'unistore'

import { ITracksState } from './tracks'
import { IUser, Playlists, IAuthenticationn } from '../spotify'

const devtools = require('unistore/devtools')

export interface IStore {
  user: IUser | null
  tracks: ITracksState | null
  playlists: Playlists | null
  authentication: IAuthentication | null
}

export default devtools(
  createStore<IStore>({
    user: null,
    tracks: null,
    playlists: null,
    authentication: null,
  })
)
