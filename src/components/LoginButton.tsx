import { h } from 'preact'

import { AUTH_URL } from '../utils/urls'

const LoginButton = () => (
  <a href={AUTH_URL}>Login</a>
)

export default LoginButton
