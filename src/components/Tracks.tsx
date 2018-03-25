import { maybe, Maybe } from 'tsmonad'
import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { Store } from '../store'
import { actions } from '../store/tracks'
import { PlaylistTrack } from '../spotify'
import { GetPlaylistTracksParams } from '../fetcher'

interface ComponentProps {
  userId: string | null
  playlistId: string | null
  authorization: string | null
}

interface ConnectProps {
  tracks: Store['tracks']
  getPlaylistTracks: (params: GetPlaylistTracksParams) => void
}

interface Props extends ComponentProps, ConnectProps {}

class Tracks extends Component<Props, {}> {
  componentDidMount() {
    const { userId, playlistId, authorization } = this.props
    if (userId && playlistId && authorization) {
      this.props.getPlaylistTracks({ userId, playlistId, authorization })
    }
  }

  render(props: Props) {
    return Maybe.all({
      tracks: maybe(props.tracks),
      playlistId: maybe(props.playlistId)
    })
    .map(({ playlistId, tracks }) => tracks[playlistId])
    .caseOf({
      just: tracks => (
        <div>
          { tracks.map(({ track }: PlaylistTrack) => <p>{ track.name }</p>) }
        </div>
      ),
      nothing: () => <p>No tracks :(</p>
    })
  }
}

const states = [
  'tracks'
]

export default connect<ComponentProps, {}, Store, ConnectProps>(states, actions)(Tracks)
