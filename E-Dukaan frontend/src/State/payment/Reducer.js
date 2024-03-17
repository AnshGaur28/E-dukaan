import { CREATE_PAYMENT_LINK_FAILURE, CREATE_PAYMENT_LINK_REQUEST, CREATE_PAYMENT_LINK_SUCCESS } from "./ActionType";

const initialState = {
    error : null ,
    loading : true ,
    payment_link_url : null ,
}

export const paymentReducer = (state=initialState ,action)=>{
    switch(action.type){
        case CREATE_PAYMENT_LINK_REQUEST :
            return {...state , loading:true , error:null};
        case CREATE_PAYMENT_LINK_SUCCESS:
            return {...state  , loading:false , payment_link_url : action.payload , error:null}
        case CREATE_PAYMENT_LINK_FAILURE:
            return {...state  , loading:false , error: action.payload}

        default :
        return {...state} 
    }
    
}