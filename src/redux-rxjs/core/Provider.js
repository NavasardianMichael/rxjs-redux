import { createContext, useEffect, useState } from "react"

export const Context = createContext()

const Provider = ({ store, children }) => {

    const [ storeContext, setStoreContext ] = useState(store)
    
    useEffect(() => {
        // The current effect is called twice and eventually the subscription is done twice as well because of React StrictMode
        store.getObservablestate().subscribe(() => {
            setStoreContext({...store})
        })
    }, [])

    return (
        <Context.Provider value={storeContext}>
            {children}
        </Context.Provider>
    )
}

export default Provider