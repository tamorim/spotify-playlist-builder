import { __, compose, assoc, prop } from 'ramda'

import { IStore } from './index'
import { getPlaylists } from '../fetcher'
import { IPlaylistsResponse, Playlists } from '../spotify'

interface IPlaylistState {
  playlists: Playlists
}

const playlistItems = compose<IPlaylistsResponse, Playlists, IPlaylistState>(
  assoc('playlists', __, {}),
  prop('items')
)

export const actions = {
  getPlaylists: (_state: IStore, authorization: string) =>
    getPlaylists(authorization)
      .map(playlistItems)
      .promise()
      .catch(console.error),
}
