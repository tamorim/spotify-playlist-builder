import { IStore } from './index'
import { IAuthentication } from '../spotify'

export interface IAuthenticationPair extends Array<string> {
  0: keyof IAuthentication
  1: string
  length: 2
}

const splitParams = (str: string) => str.split('#')[1]

const paramsFromString = (str: string) => {
  const a = str.split('&')
  const b = a.map(x => x.split('=')) as IAuthenticationPair[]
  const c = b.reduce((acc: any, [key, value]) => {
    acc[key] = value
    return acc
  }, {}) as IAuthentication
  return c
}

export const actions = {
  getAuthentication: (_state: IStore, url: string) => {
    const strParams = splitParams(url)
    return strParams ? { authentication: paramsFromString(strParams) } : {}
  },
}
