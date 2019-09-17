const initialState = {
    Authorization: 'false',
    Role: 'null'
}
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 0:
            //state.Authorization = action.stateOfLife.accessToken
            let role = '';
            action.stateOfLife.roles.forEach(element => {
                role = element.authority
            });
            return {
                Authorization: 'Bearer ' + action.stateOfLife.accessToken,
                Role: role
            };
         
        default:
            return state;
    }
};
export default myReducer