import { Store as UnistoreStore } from 'unistore'

import { IStore } from './index'
import { PlaylistTracksResponse, Tracks } from '../spotify'
import { getPlaylistTracks, IGetPlaylistTracksParams } from '../fetcher'

export interface ITracksState {
  [key: string]: Tracks
}

export const actions = (store: UnistoreStore<IStore>) => ({
  getPlaylistTracks: (
    _state: IStore,
    { userId, playlistId, authorization }: IGetPlaylistTracksParams
  ) =>
    getPlaylistTracks({ userId, playlistId, authorization })
      .map((playlistTracks: PlaylistTracksResponse) => ({
        tracks: {
          ...store.getState().tracks,
          [playlistId]: playlistTracks.items,
        },
      }))
      .promise()
      .catch(console.error),
})
