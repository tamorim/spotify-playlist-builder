import { tryP, encaseP2, of, reject } from 'fluture'

import { USER_URL, PLAYLISTS_URL } from './utils/constants'

const fetchF = encaseP2(fetch)

export const fetcher = (url: string, options?: RequestInit) =>
  fetchF(url, { mode: 'cors', ...options })
    .chain(res => res.ok ? of(res) : reject(res))
    .chain((res: Response) => tryP(() => res.json()))

export const getPlaylists = (authorization: string) =>
  fetcher(PLAYLISTS_URL, { headers: { authorization } })

export const getUser = (authorization: string) =>
  fetcher(USER_URL, { headers: { authorization } })