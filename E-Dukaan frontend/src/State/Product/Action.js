import { api , API_BASE_URL} from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type : FIND_PRODUCT_REQUEST })
    const { colors, sizes, minPrice, maxPrice, category, stock, minDiscount, sort, pageNumber, pageSize } = reqData;
    // console.log(reqData);
    // console.log(`${API_BASE_URL}/api/product?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&minDiscount=${minDiscount}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
    try {
        const {data} = await api.get(`${API_BASE_URL}/api/product?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
        // console.log("recieved data" , data);
        dispatch({type:FIND_PRODUCT_SUCCESS , payload:data});
    }
    catch (error) {
        console.log(error.message);
        dispatch({type:FIND_PRODUCT_FAILURE , payload:error.message});
    }
}

export const findProductById=  (productId) => async(dispatch)=>{
    // console.log(productId);
    dispatch({type:  FIND_PRODUCT_BY_ID_REQUEST}) ;
    // console.log(productId);
    try{
        const {data} = await api.get(`${API_BASE_URL}/api/product/id/${productId}`);
        // console.log(data);
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS , payload : data});
    }
    catch(error){
        // console.log(error.message);
        dispatch({type : FIND_PRODUCT_BY_ID_FAILURE , payload : error.message})
    }
}