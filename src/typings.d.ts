declare module 'unistore' {
  import { Listener, Unsubscribe, Action, BoundAction, Store } from 'unistore'
  export default function createStore<K>(state?: K): Store<K>
  export type BoundAction = (...args: any[]) => void
  export interface Store<K> {
    action(action: Action<K>): BoundAction
    setState(update: object, overwrite?: boolean, action?: Action<K>): void
    subscribe(f: Listener<K>): Unsubscribe
    unsubscribe(f: Listener<K>): void
    getState(): K
  }
  export {
    Listener,
    Unsubscribe,
    Action,
    ActionFn,
    ActionMap,
    ActionCreator,
    StateMapper,
    connect,
    ProviderProps,
    Provider,
  } from 'unistore/index'
}

declare module 'unistore/devtools' {
  import { Store } from 'unistore'
  export default function devtools<T>(store: Store<T>): Store<T>
}

declare module 'unistore/preact' {
  export { connect, Provider } from 'unistore'
}

declare module 'preact-router/match' {
  export interface LinkProps extends JSX.HTMLAttributes {
    href: string
    class?: string
    activeClassName?: string
  }
  export function Link(props: LinkProps): preact.VNode
}
