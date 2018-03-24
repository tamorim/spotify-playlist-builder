import { h } from 'preact'
import { maybe } from 'tsmonad'
import { connect } from 'unistore/preact'

import Playlists from './Playlists'
import { AUTH_URL } from '../utils/constants'
import { Authentication } from '../store/authentication'

interface Props {
  authentication: Authentication
}

const App = (props: Props) => {
  const authorization = maybe(props.authentication!)
    .map(auth => `${auth.token_type} ${auth.access_token}`)
    .valueOr('')

  return (
    <div>
      <h1>Playlists</h1>
      { !authorization && <a href={AUTH_URL}>Login</a> }
      <Playlists authorization={authorization || null} />
    </div>
  )
}

const states = [
  'authentication'
]

export default connect(states)(App)
