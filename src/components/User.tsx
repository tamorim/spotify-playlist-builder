import { maybe } from 'tsmonad'
import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { Store } from '../store'
import { actions } from '../store/user'

interface ComponentProps {
  authorization: string | null
}

interface ConnectProps {
  user: Store['user']
  getUser: (authorization: string) => void
}

interface Props extends ComponentProps, ConnectProps {}

class User extends Component<Props, {}> {
  componentDidMount() {
    const { authorization } = this.props
    if (authorization) {
      this.props.getUser(authorization)
    }
  }

  render(props: Props) {
    return maybe(props.user!)
      .caseOf({
        just: user => <h2>{ user.display_name }</h2>,
        nothing: () => null
      })
  }
}

const states = [
  'user'
]

export default connect<ComponentProps, {}, Store, ConnectProps>(states, actions)(User)
