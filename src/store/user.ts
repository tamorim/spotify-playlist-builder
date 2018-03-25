import { IStore } from './index'
import { getUser } from '../fetcher'

export const actions = {
  getUser: (_state: IStore, authorization: string) => (
    getUser(authorization)
      .map(user => ({ user }))
      .promise()
      .catch(console.error)
  ),
}
