import { h } from 'preact'

import { AUTH_URL } from '../utils/urls'

const LoginButton = () => (
  <a class="bg-green pv3 fw7 ttu white ph5 br-pill no-underline" href={AUTH_URL}>
    Login
  </a>
)

export default LoginButton
