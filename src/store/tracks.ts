import { Store as UnistoreStore } from 'unistore'

import { IStore } from './index'
import { IPlaylistTracksResponse, Tracks } from '../spotify'
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
      .then((playlistTracks: IPlaylistTracksResponse) => ({
        tracks: {
          ...store.getState().tracks,
          [playlistId]: playlistTracks.items,
        },
      }))
      .catch(console.error),
})
