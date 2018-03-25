import { maybe } from 'tsmonad'
import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { IStore } from '../store'
import { actions } from '../store/user'

interface IComponentProps {
  authorization: string | null
}

interface IConnectProps {
  user: IStore['user']
  getUser: (authorization: string) => void
}

interface IProps extends IComponentProps, IConnectProps {}

class User extends Component<IProps, {}> {
  componentDidMount() {
    const { authorization } = this.props
    if (authorization) {
      this.props.getUser(authorization)
    }
  }

  render(props: IProps) {
    return maybe(props.user!)
      .caseOf({
        just: user => (
          <div class="w-100 pv2 tc fw7 green bg-black-10">
            { user.display_name }
          </div>
        ),
        nothing: () => null,
      })
  }
}

const states = [
  'user',
]

export default connect<IComponentProps, {}, IStore, IConnectProps>(states, actions)(User)
