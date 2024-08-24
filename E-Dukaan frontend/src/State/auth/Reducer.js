import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    user : null ,
    error : null ,
    jwt : null ,
    loading : false ,
}
export const authReducer = (state=initialState , action)=>{
    switch(action.type){
        case  LOGIN_REQUEST:
        case  REGISTER_REQUEST:
        case  GET_USER_REQUEST:
            return {...state , loading:true , error:null };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS :
            toast.success("Login successful!");
            return {...state , loading : false , error:null , jwt : action.payload};
        case GET_USER_SUCCESS :
            return {...state , loading:false , error:null , user:action.payload};
        case GET_USER_FAILURE:
        case LOGIN_FAILURE :
        case REGISTER_FAILURE:
            return {...state , error : action.payload , loading : false};
        default: 
        return state ;
    }

}