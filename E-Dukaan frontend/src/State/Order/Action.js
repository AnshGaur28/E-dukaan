import axios from 'axios';
import {api , API_BASE_URL} from '../../config/apiConfig.js';
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from './ActionType';
// import { useNavigate } from 'react-router-dom';
export const createOrder = (reqData)=> async (dispatch)=>{
    console.log(reqData);
    dispatch({type :CREATE_ORDER_REQUEST});
    // console.log(reqData);
    try{
        const {data} = await api.post(`${API_BASE_URL}/api/orders` , reqData.address);
        if(data._id){
            reqData.navigate({search : `step=3&order_id=${data._id}`});
        }
        dispatch({type : CREATE_ORDER_SUCCESS , payload : data})
    }
    catch(error){
        // console.log(error.message);
        dispatch({type : CREATE_ORDER_FAILURE , payload : error.message})
    }
};

export const getOrderById = (orderId)=> async(dispatch)=>{
    dispatch({type:GET_ORDER_BY_ID_REQUEST});
    try{
        console.log(orderId);
        const {data} = await api.get(`${API_BASE_URL}/api/orders/${orderId}`)
        console.log('order' , data);
        dispatch({type:GET_ORDER_BY_ID_SUCCESS , payload:data});
    }
    catch(error){
        console.log(error.message);
        dispatch({type:GET_ORDER_BY_ID_FAILURE})
    }
}