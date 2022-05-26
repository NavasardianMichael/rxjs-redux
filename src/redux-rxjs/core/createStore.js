import { Subject } from "rxjs"

export const createStore = (reducer, preloadedState) => {

    let stateObservable = new Subject()
    let state = preloadedState
    
    let store = {
        getObservablestate: () => stateObservable,
        getState: () => state,
        dispatch: (args) => stateObservable.next(reducer(state, args))
    }

    stateObservable.subscribe(val => state = val)

    return store

}