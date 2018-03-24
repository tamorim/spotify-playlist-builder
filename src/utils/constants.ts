import { CLIENT_ID } from '../secrets'

export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=http://localhost:8080/callback`
export const PLAYLISTS_URL = 'https://api.spotify.com/v1/me/playlists'
export const USER_URL = 'https://api.spotify.com/v1/me'