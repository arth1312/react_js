// update 

export const counterReducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "INC":
            return state = state + 1
        case "DEC":
            return state = state - 1
        default:
            return state
    }
}