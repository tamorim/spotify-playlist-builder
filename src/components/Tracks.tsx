import { maybe, Maybe } from 'tsmonad'
import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { IStore } from '../store'
import { actions } from '../store/tracks'
import { PlaylistTrack } from '../spotify'
import { IGetPlaylistTracksParams } from '../fetcher'

interface IComponentProps {
  userId: string | null
  playlistId: string | null
  authorization: string | null
}

interface IConnectProps {
  tracks: IStore['tracks']
  getPlaylistTracks: (params: IGetPlaylistTracksParams) => void
}

interface IProps extends IComponentProps, IConnectProps {}

class Tracks extends Component<IProps, {}> {
  componentDidMount() {
    const { userId, playlistId, authorization } = this.props
    if (userId && playlistId && authorization) {
      this.props.getPlaylistTracks({ userId, playlistId, authorization })
    }
  }

  render(props: IProps) {
    return Maybe.all({
      tracks: maybe(props.tracks),
      playlistId: maybe(props.playlistId),
    })
    .map(({ playlistId, tracks }) => tracks[playlistId])
    .caseOf({
      just: tracks => (
        <div>
          { tracks.map(({ track }: PlaylistTrack) => <p>{ track.name }</p>) }
        </div>
      ),
      nothing: () => <p>No tracks :(</p>,
    })
  }
}

const states = [
  'tracks',
]

export default connect<IComponentProps, {}, IStore, IConnectProps>(states, actions)(Tracks)
