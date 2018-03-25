import { maybe } from 'tsmonad'
import { Component } from 'preact'
import { route } from 'preact-router'

interface Props {
  to: string
  onEnter?: Function
}

class Redirect extends Component<Props, {}> {
  componentWillMount() {
    maybe(this.props.onEnter as Function)
      .map(onEnter => onEnter())
    route(this.props.to, true)
  }

  render() {
    return null
  }
}

export default Redirect