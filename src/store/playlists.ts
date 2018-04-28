import { IStore } from './index'
import { getPlaylists } from '../fetcher'
import { IPlaylistsResponse, Playlists } from '../spotify'

interface IPlaylistState {
  playlists: Playlists
}

const playlistItems = ({ items }: IPlaylistsResponse): IPlaylistState => ({
  playlists: items,
})

export const actions = {
  getPlaylists: (_state: IStore, authorization: string) =>
    getPlaylists(authorization)
      .then(playlistItems)
      .catch(console.error),
}
