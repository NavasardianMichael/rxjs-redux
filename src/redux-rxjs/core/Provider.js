import { createContext, useEffect, useRef, useState } from "react"

export const Context = createContext()

const Provider = ({ store, children }) => {

    const [ storeContext, setStoreContext ] = useState(store)
    const prevStateRef = useRef(null)
    
    useEffect(() => {
        // The current effect is called twice and eventually the subscription is done twice as well because of React StrictMode
        store.getObservablestate().subscribe(emittedState => {
            
            if(emittedState === prevStateRef.current) return;

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