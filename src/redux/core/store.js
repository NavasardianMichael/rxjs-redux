import { createContext } from "react"
import { Observable } from "rxjs"
import { subscriptions } from "./subscribe"

export let Context = createContext()

export const createStore = (reducer) => {

    let state = {}
    let store = {
        subscribe: () => {
            Object.keys(subscriptions).map((type) => {
                return subscriptions[type].subscribe(value => {
                    state = reducer(state, value)
                })
            })
        },
        getState: () => {
            return state
        },
        dispatch: (type, args) => {
            subscriptions[type].next({
                type,
                ...args
            })
        },
    }

    store.subscribe()

    return store
}