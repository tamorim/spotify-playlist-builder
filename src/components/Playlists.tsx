import { maybe } from 'tsmonad'
import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import Tracks from './Tracks'
import { IStore } from '../store'
import { actions } from '../store/playlists'

interface IComponentProps {
  authorization: string | null
}

interface IConnectProps {
  playlists: IStore['playlists']
  getPlaylists: (authorization: string) => void
}

interface IProps extends IComponentProps, IConnectProps {}

class Playlists extends Component<IProps, {}> {
  componentDidMount() {
    const { authorization } = this.props
    if (authorization) {
      this.props.getPlaylists(authorization)
    }
  }

  render(props: IProps) {
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
        nothing: () => <p>No playlists :(</p>,
      })
  }
}

const states = [
  'playlists',
]

export default connect<IComponentProps, {}, IStore, IConnectProps>(states, actions)(Playlists)
