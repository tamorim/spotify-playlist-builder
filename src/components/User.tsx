import { maybe } from 'tsmonad'
import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import { Store } from '../store'
import { actions, User as UserType } from '../store/user'

interface ComponentProps {
  authorization: string | null
}

interface ConnectProps {
  user: UserType,
  getUser: (authorization: string) => void
}

interface Props extends ComponentProps, ConnectProps {}

class User extends Component<Props, {}> {
  componentDidMount() {
    maybe(this.props.authorization!)
      .caseOf({
        just: authorization => this.props.getUser(authorization),
        nothing: () => {}
      })
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
