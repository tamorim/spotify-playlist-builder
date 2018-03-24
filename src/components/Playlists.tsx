import { maybe } from 'tsmonad'
import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { Store } from '../store'
import { actions, Playlists as PlaylistsType } from '../store/playlists'

interface ComponentProps {
  authorization: string | null
}

interface ConnectProps {
  playlists: PlaylistsType,
  getPlaylists: (authorization: string) => void
}

interface Props extends ComponentProps, ConnectProps {}

class Playlists extends Component<Props, {}> {
  componentDidMount() {
    maybe(this.props.authorization!)
      .caseOf({
        just: authorization => this.props.getPlaylists(authorization),
        nothing: () => {}
      })
  }

  render(props: Props) {
    return maybe(props.playlists!)
      .caseOf({
        just: playlists => (
          <div>
            { playlists.map(playlist => <p>{ playlist.name }</p>) }
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
