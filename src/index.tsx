import { h, render } from 'preact'

const container = document.getElementById('root') as HTMLElement

const renderApp = () => {
  const App = require('./components/App').default
  render(<App />, container, container.lastChild as Element)
}

if (module.hot) {
  require('preact/devtools')
  module.hot.accept('./components/App', () => requestAnimationFrame(renderApp))
}

renderApp()
