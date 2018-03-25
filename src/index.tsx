import Router from 'preact-router'
import { h, render } from 'preact'
import { Provider } from 'unistore/preact'

import store from './store'
import Redirect from './components/Redirect'
import { actions } from './store/authentication'

const container = document.getElementById('root') as HTMLElement

const boundGetAuthentication = store.action(actions.getAuthentication)

const onCallbackEnter = () =>
  boundGetAuthentication(window.location.href)

const renderApp = () => {
  const App = require('./components/App').default
  render(
    <Provider store={store}>
      <Router>
        <Redirect
          path="/callback"
          to="/"
          onEnter={onCallbackEnter}
        />
        <App default />
      </Router>
    </Provider>,
    container,
    container.lastChild as Element,
  )
}

if (module.hot) {
  require('preact/devtools')
  module.hot.accept('./components/App', () => requestAnimationFrame(renderApp))
}

renderApp()
