import { Store } from './index'
import { getUser } from '../fetcher'

export const actions = {
  getUser: (_state: Store, authorization: string) => (
    getUser(authorization)
      .map(user => ({ user }))
      .promise()
      .catch(console.error)
  )
}