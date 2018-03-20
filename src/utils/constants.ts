import { CLIENT_ID } from '../secrets'

export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=http://localhost:8080/callback`