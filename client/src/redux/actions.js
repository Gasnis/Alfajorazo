import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";



export const getProducts = () => {
    return async (dispatch) => {
        const { data } = await axios.get(`/products`);
        return dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    }
}



