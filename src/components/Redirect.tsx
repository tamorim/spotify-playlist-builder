import { maybe } from 'tsmonad'
import { Component } from 'preact'
import { route } from 'preact-router'

interface IProps {
  to: string
  onEnter?: () => void
}

class Redirect extends Component<IProps, {}> {
  componentWillMount() {
    maybe(this.props.onEnter!)
      .map(onEnter => onEnter())
    route(this.props.to, true)
  }

  render() {
    return null
  }
}

export default Redirect
