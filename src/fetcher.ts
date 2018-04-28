import { USER_URL, PLAYLISTS_URL, playlistTracksUrl } from './utils/urls'

export interface IFetcherParams {
  url: string
  authorization: string
  options?: RequestInit
}

export const fetcher = ({ url, authorization, options }: IFetcherParams) =>
  fetch(url, {
    mode: 'cors',
    headers: { authorization },
    ...options,
  })
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res
    })
    .then((res: Response) => res.json())

export const getPlaylists = (authorization: string) =>
  fetcher({ url: PLAYLISTS_URL, authorization })

export const getUser = (authorization: string) =>
  fetcher({ url: USER_URL, authorization })

export interface IGetPlaylistTracksParams {
  userId: string
  playlistId: string
  authorization: string
}

export const getPlaylistTracks = ({
  userId,
  playlistId,
  authorization,
}: IGetPlaylistTracksParams) =>
  fetcher({ url: playlistTracksUrl(userId, playlistId), authorization })
