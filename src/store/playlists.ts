import { __, compose, assoc, prop } from 'ramda'

import { Store } from './index'
import { getPlaylists } from '../fetcher'

export interface Tracks {
  href: string,
  total: number
}

export interface Owner {
  display_name: string,
  external_urls: ExternalUrls,
  href: string,
  id: string,
  type: 'user',
  uri: string
}

export interface Image {
  width: number,
  height: number,
  url: string
}

export interface ExternalUrls {
  [key: string]: string
}

export interface PlaylistItem {
  collaborative: boolean,
  external_urls: ExternalUrls,
  href: string,
  id: number,
  images: Image[],
  name: string,
  owner: Owner,
  public: boolean,
  snapshot_id: string,
  tracks: Tracks,
  type: 'playlist',
  uri: string
}

export interface PlaylistsResponse {
  href: string,
  items: PlaylistItem[]
}

export type Playlists = PlaylistItem[] | null

interface PlaylistState {
  playlists: Playlists
}

const playlistItems = compose<PlaylistsResponse, Playlists, PlaylistState>(
  assoc('playlists', __, {}),
  prop('items')
)

export default null

export const actions = {
  getPlaylists: (_state: Store, authorization: string) => (
    getPlaylists(authorization)
      .map(playlistItems)
      .promise()
      .catch(console.error)
  )
}