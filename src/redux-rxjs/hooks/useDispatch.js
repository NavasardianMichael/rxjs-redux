import { useStore } from "./useStore";

export function useDispatch() {
    const currentStore = useStore()
    return currentStore.dispatch
}