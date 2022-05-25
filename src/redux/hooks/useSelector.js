import { useStore } from "./useStore";

export function useSelector(callback) {
    let currentStore = useStore()
    return callback(currentStore.getState())
}