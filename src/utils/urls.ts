import { CLIENT_ID } from '../secrets'

export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=http://localhost:8080/callback`

export const PLAYLISTS_URL = 'https://api.spotify.com/v1/me/playlists?limit=50'

export const USER_URL = 'https://api.spotify.com/v1/me'

export const playlistTracksUrl = (userId: string, playlistId: string) =>
 `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`
