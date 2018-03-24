import { __, assoc } from 'ramda'

import { Store } from './index'
import { getUser } from '../fetcher'

export interface UserInfo {
  country: string,
  display_name: string | null,
  external_urls: {
    [key: string]: string
  },
  followers: {
    href: string | null,
    total: number
  },
  href: string,
  id: string,
  images: {
    height: number | null,
    width: number | null,
    href: string
  }[],
  type: 'user',
  uri: string
}

export type User = UserInfo | null

export default null

export const actions = {
  getUser: (_state: Store, authorization: string) => (
    getUser(authorization)
      .map(assoc('user', __, {}))
      .promise()
      .catch(console.error)
  )
}