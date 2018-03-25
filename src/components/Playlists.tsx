import { maybe } from 'tsmonad'
import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import Tracks from './Tracks'
import { Store } from '../store'
import { actions } from '../store/playlists'

interface ComponentProps {
  authorization: string | null
}

interface ConnectProps {
  playlists: Store['playlists']
  getPlaylists: (authorization: string) => void
}

interface Props extends ComponentProps, ConnectProps {}

class Playlists extends Component<Props, {}> {
  componentDidMount() {
    const { authorization } = this.props
    if (authorization) {
      this.props.getPlaylists(authorization)
    }
  }

  render(props: Props) {
    return maybe(props.playlists!)
      .caseOf({
        just: playlists => (
          <div>
            {
              playlists.map(playlist => (
                <div>
                  <p>{playlist.name}</p>
                  <div class="ml4">
                    <Tracks
                      playlistId={playlist.id}
                      userId={playlist.owner.id}
                      authorization={props.authorization}
                    />
                  </div>
                </div>
              ))
            }
          </div>
        ),
        nothing: () => <p>No playlists :(</p>
      })
  }
}

const states = [
  'playlists'
]

export default connect<ComponentProps, {}, Store, ConnectProps>(states, actions)(Playlists)
