import { maybe } from 'tsmonad'
import { compose, map, nth, split, fromPairs } from 'ramda'

import { IStore } from './index'
import { Authentication } from '../spotify'

export interface IAuthenticationPair extends Array<string> {
  0: keyof Authentication
  1: string
  length: 2
}

const splitParams = compose(nth(1), split('#'))

const paramsFromString = (x: string) => {
  const a = split('&', x)
  const b = map(split('='), a) as IAuthenticationPair[]
  const c = fromPairs(b) as Authentication
  return c
}

export const actions = {
  getAuthentication: (_state: IStore, url: string) => (
    maybe(splitParams(url))
      .map(paramsFromString)
      .caseOf({
        just: authentication => ({ authentication }),
        nothing: () => ({}),
      })
  ),
}
