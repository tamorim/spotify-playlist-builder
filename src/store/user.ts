import { IStore } from './index'
import { getUser } from '../fetcher'

export const actions = {
  getUser: (_state: IStore, authorization: string) =>
    getUser(authorization)
      .then(user => ({ user }))
      .catch(console.error),
}
