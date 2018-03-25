import { Store as UnistoreStore } from 'unistore'

import { Store } from './index'
import { PlaylistTracksResponse, Tracks } from '../spotify'
import { getPlaylistTracks, GetPlaylistTracksParams } from '../fetcher'

export interface TracksState {
  [key: string]: Tracks
}

export const actions = (store: UnistoreStore<Store>) => ({
  getPlaylistTracks: (_state: Store, { userId, playlistId, authorization}: GetPlaylistTracksParams) => (
    getPlaylistTracks({ userId, playlistId, authorization })
      .map((playlistTracks: PlaylistTracksResponse) => ({
        tracks: { 
          ...store.getState().tracks,
          [playlistId]: playlistTracks.items
        }
      }))
      .promise()
      .catch(console.error)
  )
})