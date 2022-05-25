import { BehaviorSubject } from "rxjs"

export const createStore = (reducer, preloadedState) => {

    let stateObservable = new BehaviorSubject()
    let state = preloadedState

    let store = {
        getObservablestate: () => stateObservable,
        getState: () => state,
        dispatch: (args) => stateObservable.next(reducer(state, args))
    }

    stateObservable.subscribe(val => state = val)

    return store
}

export const combineReducers = (reducers) => {
    return (state, args) => {
        for(let reducerName in reducers) {
            reducers[reducerName](state, args)
        }
    }
}