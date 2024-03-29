import axios from "axios";

export const API_BASE_URL = "https://e-dukaan.onrender.com";

const jwt = localStorage.getItem('jwt') ; 
export const api = axios.create({
    baseURL : API_BASE_URL ,
    headers : {
        "Authorization" : `BEARER ${jwt}`,
        "Content-Type" : "application/json"
    }
});