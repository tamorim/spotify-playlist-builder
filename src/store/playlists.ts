import { __, compose, assoc, prop } from 'ramda'

import { Store } from './index'
import { getPlaylists } from '../fetcher'
import { PlaylistsResponse, Playlists } from '../spotify'

interface PlaylistState {
  playlists: Playlists
}

const playlistItems = compose<PlaylistsResponse, Playlists, PlaylistState>(
  assoc('playlists', __, {}),
  prop('items')
)

export const actions = {
  getPlaylists: (_state: Store, authorization: string) => (
    getPlaylists(authorization)
      .map(playlistItems)
      .promise()
      .catch(console.error)
  )
}