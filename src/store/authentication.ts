import { maybe } from 'tsmonad'
import { compose, map, nth, split, fromPairs, Dictionary } from 'ramda'

import { Store } from './index'

export interface AuthenticationParams extends Dictionary<string> {
  access_token: string,
  token_type: 'Bearer',
  expires_in: string
}

export type Authentication = AuthenticationParams | null

interface AuthenticationPair extends Array<string> {
  0: keyof AuthenticationParams
  1: string
  length: 2
}

const splitParams = compose(nth(1), split('#'))

const paramsFromString = (x: string) => {
  const a = split('&', x)
  const b = map(split('='), a) as AuthenticationPair[]
  const c = fromPairs(b) as AuthenticationParams
  return c
}

export default null

export const actions = {
  getAuthentication: (_state: Store, url: string) => (
    maybe(splitParams(url))
      .map(paramsFromString)
      .caseOf({
        just: authentication => ({ authentication }),
        nothing: () => ({})
      })
  )
}