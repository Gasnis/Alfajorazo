import {
    GET_PRODUCTS,

} from "./actions"


const initialState = {
    products: [],
    allProducts: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            
            return {
                ...state,
                allProducts: action.payload,
                products: action.payload
            }
            
        default:
            return state;
    }
}