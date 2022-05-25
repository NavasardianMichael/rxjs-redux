import { createContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { BehaviorSubject, Observable, Subject } from "rxjs"

export const Context = createContext()

const Provider = ({ store, children }) => {

    const [ storeContext, setStoreContext ] = useState(store)
    const prevStateRef = useRef(null)
    
    useEffect(() => {
        store.getObservablestate().subscribe(val => {
            if(storeContext === prevStateRef.current) return
            setStoreContext({...store})
            prevStateRef.current = store.getState()
        })
    }, [])

    return (
        <Context.Provider value={storeContext}>
            {children}
        </Context.Provider>
    )
}

export default Provider