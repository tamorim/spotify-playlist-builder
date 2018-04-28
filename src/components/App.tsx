import { h } from 'preact'
import { connect } from 'unistore/preact'

import User from './User'
import { IStore } from '../store'
import Playlists from './Playlists'
import LoginButton from './LoginButton'

interface IProps {
  authentication: IStore['authentication']
}

const App = ({ authentication }: IProps) => {
  const auth = authentication
    ? `${authentication.token_type} ${authentication.access_token}`
    : null
  return (
    <div class="flex flex-wrap w-100 justify-center sans-serif">
      {auth
        ? [<User authorization={auth} />, <Playlists authorization={auth} />]
        : [
            <LoginButton />,
            <User authorization={null} />,
            <Playlists authorization={null} />,
          ]}
    </div>
  )
}

const states = ['authentication']

export default connect(states)(App)
