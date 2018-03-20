import { tryP, encaseP2, of, reject } from 'fluture'

import { PLAYLISTS_URL } from './utils/constants'

const fetchF = encaseP2(fetch)

export const fetcher = (url: string, options?: RequestInit) =>
  fetchF(url, { mode: 'cors', ...options })
    .chain(res => res.ok ? of(res) : reject(res))
    .chain((res: Response) => tryP(() => res.json()))

export const getPlaylists = (authorization: string) =>
  fetcher(PLAYLISTS_URL, { headers: { authorization } })