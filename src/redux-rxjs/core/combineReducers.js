export const combineReducers = (reducers) => {
    return (state = {}, args) => {
        let result = {}
        for(let sub in reducers) {
            result[sub] = reducers[sub](state[sub], args)
        }
        return result
    }
}