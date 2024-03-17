import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType"

const initialState = {
    products :  [] ,
    product : null ,
    loading : null ,
    error : null ,
}

export const CustomerProductReducer = (state=initialState ,action)=>{
    switch(action.type){
        case FIND_PRODUCT_BY_ID_REQUEST:
        case FIND_PRODUCT_REQUEST :
            return {...state , loading:true , error:null}
        case FIND_PRODUCT_SUCCESS:
            return {...state , loading:false , error:  null , products:  action.payload};
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state , loading:false , error:  null , product:  action.payload};
        case FIND_PRODUCT_FAILURE:
        case  FIND_PRODUCT_BY_ID_FAILURE:
            return {...state , loading:false , error:  action.payload };

        default : 
        return state 
    }
}