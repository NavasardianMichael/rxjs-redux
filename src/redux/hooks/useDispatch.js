import { useContext } from "react";
import { Context } from "../core/store";

export function useDispatch() {
    const [currentStore] = useContext(Context)

    return currentStore.dispatch
}