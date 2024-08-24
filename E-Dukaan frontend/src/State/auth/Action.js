import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS ,GET_USER_FAILURE , GET_USER_SUCCESS , GET_USER_REQUEST, LOGOUT } from "./ActionType";
const registerRequest = ()=>({type:REGISTER_REQUEST});
const registerSuccess = (user)=>({type:REGISTER_SUCCESS , payload : user});
const registerFailure = (error)=>({type:REGISTER_FAILURE , payload : error});
// const jwt = localStorage.getItem('jwt');
export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem('jwt', user.jwt);
        }
        dispatch(registerSuccess(user.jwt));
        toast.success("Registration successful!");
    } catch (error) {
        dispatch(registerFailure(error.message));
        toast.error(`Registration failed: ${error.message}`);
    }
};



const loginRequest = ()=>({type:LOGIN_REQUEST});
const loginSuccess = (user)=>({type:LOGIN_SUCCESS , payload : user});
const loginFailure = (error)=>({type:LOGIN_FAILURE , payload : error});

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem('jwt', user.jwt);
        }
        dispatch(loginSuccess(user.jwt));
    } catch (error) {
        dispatch(loginFailure(error.message));
        toast.error(`Login failed: ${error.message}`);
    }
};

const getUserRequest = ()=>({type:GET_USER_REQUEST});
const getUserSuccess = (user)=>({type:GET_USER_SUCCESS , payload : user});
const getUserFailure = (error)=>({type:GET_USER_FAILURE , payload : error});
export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                'Authorization': `BEARER ${jwt}`,
            },
        });
        const user = response.data;
        dispatch(getUserSuccess(user));
        // toast.success("User data retrieved successfully!");
    } catch (error) {
        dispatch(getUserFailure(error.message));
        // toast.error(`Failed to retrieve user data: ${error.message}`);
    }
};

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT, payload: null });
    localStorage.clear();
    toast.info("Logged out successfully!");
};