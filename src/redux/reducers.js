const initialState = {
    Authorization: 'false'
}
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 0:
            state.Authorization = action.stateOfLife
            return state = 'Bearer ' + action.stateOfLife
        default:
            return state;
    }
};
export default myReducer