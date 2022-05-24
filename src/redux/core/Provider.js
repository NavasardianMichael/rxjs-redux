import { useEffect, useState } from "react"
import { Observable, Subject } from "rxjs"
import { Context } from "./store"

const Provider = ({ store, children }) => {

    const [ context, setContext ] = useState(store)

    const observer = {
        next: a => console.log(a)
    }
    const observable = new Observable(subscriber => subscriber.next(store.getState()))
    observable.subscribe(observer)

    return (
        <Context.Provider value={[context, setContext]}>
            {children}
        </Context.Provider>
    )
}

export default Provider