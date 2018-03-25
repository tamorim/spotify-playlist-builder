import { h } from 'preact'
import { maybe } from 'tsmonad'
import { connect } from 'unistore/preact'

import User from './User'
import { IStore } from '../store'
import Playlists from './Playlists'
import LoginButton from './LoginButton'

interface IProps {
  authentication: IStore['authentication']
}

const App = (props: IProps) => {
  return (
    <div>
      <h1>Playlists</h1>
      {
        maybe(props.authentication!)
          .map(auth => `${auth.token_type} ${auth.access_token}`)
          .caseOf({
            just: auth => (
              <div>
                <User authorization={auth} />
                <Playlists authorization={auth} />
              </div>
            ),
            nothing: () => (
              <div>
                <LoginButton />
                <User authorization={null} />
                <Playlists authorization={null} />
              </div>
            ),
          })
      }
    </div>
  )
}

const states = [
  'authentication',
]

export default connect(states)(App)
