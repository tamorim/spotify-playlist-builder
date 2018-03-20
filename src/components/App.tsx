import { h } from 'preact'
import { maybe } from 'tsmonad'
import { connect } from 'unistore/preact'

import { AUTH_URL } from '../utils/constants'
import { actions, Playlists } from '../store/playlists'
import { Authentication } from '../store/authentication'

interface Props {
  playlists: Playlists,
  authentication: Authentication,
  getPlaylists: (authorization: string) => void
}

const App = (props: Props) => {
  const authorization = maybe(props.authentication!)
    .map(auth => `${auth.token_type} ${auth.access_token}`)
    .valueOr('')

  return (
    <div>
      <h1>Playlists</h1>
      { !authorization && <a href={AUTH_URL}>Login</a> }
      {
        authorization && (
          maybe(props.playlists!)
            .caseOf({
              just: playlists =>
                playlists.map(playlist => (
                  <h2>{ playlist.name }</h2>
                )),
              nothing: () =>
                props.getPlaylists(authorization)
            })
        )
      }
    </div>
  )
}

const states = [
  'playlists',
  'authentication'
]

export default connect(states, actions)(App)
