import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { IStore } from '../store'
import { actions } from '../store/tracks'
import { IGetPlaylistTracksParams } from '../fetcher'

interface IComponentProps {
  playlistId?: string
}

interface IConnectProps {
  user: IStore['user']
  tracks: IStore['tracks']
  authentication: IStore['authentication']
  getPlaylistTracks: (params: IGetPlaylistTracksParams) => void
}

interface IProps extends IComponentProps, IConnectProps {}

class Tracks extends Component<IProps, {}> {
  componentDidMount() {
    const { user, playlistId, authentication } = this.props
    this.props.getPlaylistTracks({
      userId: user!.id,
      playlistId: playlistId!,
      authorization: `${authentication!.token_type} ${
        authentication!.access_token
      }`,
    })
  }

  render({ tracks, playlistId }: IProps) {
    return tracks ? (
      <div>
        {tracks[playlistId!].map(({ track }) => (
          <div class="db pa4 f3 fw7 no-underline white bg-black-80 bb b--white">
            {track.name}
          </div>
        ))}
      </div>
    ) : (
      <p>No tracks :(</p>
    )
  }
}

const states = ['user', 'tracks', 'authentication']

export default connect<IComponentProps, {}, IStore, IConnectProps>(
  states,
  actions
)(Tracks)
