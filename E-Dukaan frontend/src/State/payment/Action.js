import { api , API_BASE_URL } from "../../config/apiConfig";
import { CREATE_PAYMENT_LINK_FAILURE, CREATE_PAYMENT_LINK_REQUEST } from "./ActionType"

export const createPayment = (orderId)=> async(dispatch) => {
    // console.log(orderId);
    dispatch({type : CREATE_PAYMENT_LINK_REQUEST});
    try{
        const {data} = await api.post(`${API_BASE_URL}/api/payments/${orderId}` , {}); 
        console.log(data);
        if(data.payment_link_url){
            window.location.href = data.payment_link_url ;
        }
    }
    catch(error){
        // console.log(error.message);
        dispatch({type: CREATE_PAYMENT_LINK_FAILURE , payload : error.message});
    }
}