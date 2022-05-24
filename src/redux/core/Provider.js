import { createContext, useEffect, useLayoutEffect, useMemo, useState } from "react"
import { BehaviorSubject, Observable, Subject } from "rxjs"

export const Context = createContext()

const Provider = ({ store, children }) => {

    const [ context, setContext ] = useState({})
    
    store.getState().subscribe(val => {
        console.log({val});
        if(context?.getState() === val) return;
        setContext(store)
    })

    return (
        <Context.Provider value={[context, setContext]}>
            {children}
        </Context.Provider>
    )
}

export default Provider