import { createContext } from "react"
import { BehaviorSubject, Observable, Subject } from "rxjs"
import { subscriptions } from "./subscribe"

export const createStore = (reducer) => {

    let state = new BehaviorSubject({})
    
    let store = {
        getState: () => {
            return state
        },
        dispatch: (type, args) => {
            state.next(reducer(state, subscriptions[type]))
        }
    }

    return store
}