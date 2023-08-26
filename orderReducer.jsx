const initialState = {
    product: '',
    quantity: 0 ,
};
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLACE_ORDER':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
export default orderReducer()