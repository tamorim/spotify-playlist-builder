import { tryP, encaseP2, of, reject } from 'fluture'

import { USER_URL, PLAYLISTS_URL, playlistTracksUrl } from './utils/urls'

const fetchF = encaseP2(fetch)

export interface FetcherParams {
  url: string
  authorization: string
  options?: RequestInit
}

export const fetcher = ({ url, authorization, options }: FetcherParams) =>
  fetchF(
    url,
    {
      mode: 'cors',
      headers: { authorization },
      ...options
    }
  )
  .chain(res => res.ok ? of(res) : reject(res))
  .chain((res: Response) => tryP(() => res.json()))

export const getPlaylists = (authorization: string) =>
  fetcher({ url: PLAYLISTS_URL, authorization })

export const getUser = (authorization: string) =>
  fetcher({ url: USER_URL, authorization })

export interface GetPlaylistTracksParams {
  userId: string
  playlistId: string
  authorization: string
}

export const getPlaylistTracks = ({ userId, playlistId, authorization }: GetPlaylistTracksParams) =>
  fetcher({ url: playlistTracksUrl(userId, playlistId), authorization })