import createStore from 'unistore'

import authentication, { Authentication } from './authentication'

export interface Store {
  authentication: Authentication
}

export default createStore<Store>({
  authentication
})