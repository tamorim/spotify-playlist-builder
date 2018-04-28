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
    <div class="flex flex-wrap w-100 justify-center sans-serif">
      {maybe(props.authentication!)
        .map(auth => `${auth.token_type} ${auth.access_token}`)
        .caseOf({
          just: auth => [
            <User authorization={auth} />,
            <Playlists authorization={auth} />,
          ],
          nothing: () => [
            <LoginButton />,
            <User authorization={null} />,
            <Playlists authorization={null} />,
          ],
        })}
    </div>
  )
}

const states = ['authentication']

export default connect(states)(App)
