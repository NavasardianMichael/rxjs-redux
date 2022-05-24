export const reducer = (state, action) => {
    return {
        ...state,
        age: Math.round(Math.random() * 100)
    }
}