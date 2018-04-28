import { Dictionary } from 'ramda'

export interface IFollowers {
  href: string | null
  total: number
}

export interface IPlaylistItemTracks {
  href: string
  total: number
}

export interface IOwner {
  display_name: string
  external_urls: IExternalUrls
  href: string
  id: string
  type: 'user'
  uri: string
}

export interface IImage {
  url: string
  width: number | null
  height: number | null
}

export interface IExternalUrls {
  [key: string]: string
}

export interface IUser {
  country: string
  display_name: string | null
  external_urls: IExternalUrls
  followers: IFollowers
  href: string
  id: string
  images: IImage[]
  type: 'user'
  uri: string
}

export interface IPlaylistItem {
  collaborative: boolean
  external_urls: IExternalUrls
  href: string
  id: string
  images: IImage[]
  name: string
  owner: IOwner
  public: boolean
  snapshot_id: string
  tracks: IPlaylistItemTracks
  type: 'playlist'
  uri: string
}

export interface IPlaylistsResponse {
  href: string
  items: IPlaylistItem[]
}

export type Playlists = IPlaylistItem[]

export interface IPlaylistTracksResponse {
  href: string
  items: IPlaylistTrack[]
  limit: number
  next: number | null
  offset: number
  previous: number | null
  total: number
}

export interface IArtist {
  external_urls: IExternalUrls
  href: string
  id: string
  name: string
  type: 'artist'
  uri: string
}

export interface IAlbumSimple {
  album_group?: 'album' | 'single' | 'compilation' | 'appears_on'
  album_type: 'album' | 'single' | 'compilation'
  artists: IArtist[]
  available_markets: string[]
  external_urls: IExternalUrls
  href: string
  id: string
  images: IImage[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  type: 'album'
  uri: string
}

export interface ILinkedFrom {
  external_urls: IExternalUrls
  href: string
  id: string
  type: 'track'
  uri: string
}

export interface IRestrictions {
  reason: string
}

export interface IExternalIds {
  [key: string]: string
}

export interface ITrackSimple {
  album: IAlbumSimple[]
  artists: IArtist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: IExternalIds
  external_urls: IExternalUrls
  href: string
  id: string
  is_playable: boolean
  linked_from: ILinkedFrom
  restrictions: IRestrictions
  name: string
  popularity: number
  preview_url: string | null
  track_number: number
  type: 'track'
  uri: string
}

export interface IAddedBy {
  external_urls: IExternalUrls
  href: string
  id: string
  type: 'user'
  uri: string
}

export interface IPlaylistTrack {
  added_at: string | null
  added_by: IAddedBy
  is_local: boolean
  track: ITrackSimple
}

export type Tracks = IPlaylistTrack[]

export interface IAuthentication extends Dictionary<string> {
  access_token: string
  token_type: 'Bearer'
  expires_in: string
}
