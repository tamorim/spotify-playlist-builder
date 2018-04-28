import { maybe } from 'tsmonad'
import { h, Component } from 'preact'
import { connect } from 'unistore/preact'
import { Link } from 'preact-router/match'

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
    return (
      <div class="flex flex-wrap justify-center w-100">
        {maybe(props.playlists!).caseOf({
          just: playlists =>
            playlists.map(playlist => (
              <Link
                class="db w-100 pa4 f3 fw7 no-underline white bg-black-80 bb b--white"
                href={`/${playlist.id}/tracks`}
              >
                {playlist.name}
              </Link>
            )),
          nothing: () => [<span class="mv4 f2 gray">No playlists :(</span>],
        })}
      </div>
    )
  }
}

const states = ['playlists']

export default connect<IComponentProps, {}, IStore, IConnectProps>(
  states,
  actions
)(Playlists)
