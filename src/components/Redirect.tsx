import { Component } from 'preact'
import { route } from 'preact-router'

interface IProps {
  to: string
  onEnter?: () => void
}

class Redirect extends Component<IProps, {}> {
  componentWillMount() {
    const { onEnter } = this.props
    if (onEnter) {
      onEnter()
    }
    route(this.props.to, true)
  }

  render() {
    return null
  }
}

export default Redirect
