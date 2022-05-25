import { useContext } from "react";
import { Context } from "../core/Provider";

export function useStore() {
    const currentStore = useContext(Context)
    return currentStore
}