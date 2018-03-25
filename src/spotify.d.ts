import { Dictionary } from 'ramda'

export interface Followers {
  href: string | null
  total: number
}

export interface PlaylistItemTracks {
  href: string
  total: number
}

export interface Owner {
  display_name: string
  external_urls: ExternalUrls
  href: string
  id: string
  type: 'user'
  uri: string
}

export interface Image {
  url: string
  width: number | null
  height: number | null
}

export interface ExternalUrls {
  [key: string]: string
}

export interface User {
  country: string
  display_name: string | null
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  type: 'user'
  uri: string
}

export interface PlaylistItem {
  collaborative: boolean
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  public: boolean
  snapshot_id: string
  tracks: PlaylistItemTracks
  type: 'playlist'
  uri: string
}

export interface PlaylistsResponse {
  href: string
  items: PlaylistItem[]
}

export type Playlists = PlaylistItem[]

export interface PlaylistTracksResponse {
  href: string
  items: PlaylistTrack[]
  limit: number
  next: number | null
  offset: number
  previous: number | null
  total: number
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: 'artist'
  uri: string
}

export interface AlbumSimple {
  album_group?: 'album' | 'single' | 'compilation' | 'appears_on'
  album_type: 'album' | 'single' | 'compilation'
  artists: Artist[]
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  type: 'album'
  uri: string
}

export interface LinkedFrom {
  external_urls: ExternalUrls
  href: string
  id: string
  type: 'track'
  uri: string
}

export interface Restrictions {
  reason: string
}

export interface ExternalIds {
  [key: string]: string
}

export interface TrackSimple {
  album: AlbumSimple[],
  artists: Artist[],
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls
  href: string
  id: string
  is_playable: boolean
  linked_from: LinkedFrom
  restrictions: Restrictions
  name: string
  popularity: number
  preview_url: string | null
  track_number: number
  type: 'track'
  uri: string
}

export interface AddedBy {
  external_urls: ExternalUrls
  href: string
  id: string
  type: 'user'
  uri: string
}

export interface PlaylistTrack {
  added_at: string | null
  added_by: AddedBy
  is_local: boolean
  track: TrackSimple
}

export type Tracks = TrackSimple[]

export interface Authentication extends Dictionary<string> {
  access_token: string
  token_type: 'Bearer'
  expires_in: string
}