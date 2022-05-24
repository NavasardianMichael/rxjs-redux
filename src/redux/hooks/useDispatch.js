import { useContext } from "react";
import { Context } from "../core/Provider";

export function useDispatch() {
    const context = useContext(Context)
// console.log({context});
    return context.dispatch
}