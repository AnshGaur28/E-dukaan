/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useDebugValue, useEffect, useState } from "react";
import { api , API_BASE_URL } from "../../../config/apiConfig";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

export default function AddressCard({user }){
    const [addresses, setAddresses] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchAddresses = async () => {
            if (user?.user?.address && Array.isArray(user.user.address)) { // Check if user.user.address is defined and is an array
                const newAddresses = await Promise.all(user.user.address.map(async (addr) => {
                    const response = await api.get(`${API_BASE_URL}/api/address/${addr}`);
                    return response.data; 
                }));
                setAddresses(newAddresses);

            }
        };

        fetchAddresses();
        // console.log(addresses);
    }, [user]);
    const handleSubmit = async (e , address)=>{
        console.log(address);
        e.preventDefault();
        dispatch(createOrder({address , navigate}))
    }
    return (
        <div className=" space-y-3 ">
            <div className="">
                <p className="font-semibold">{user?.user?.firstName } { user?.user?.lastName}</p>
                <div className="space-y-1">
                    <p>{user?.user?.email}</p>
                </div>
                {addresses.map((address) => (
                    <form onSubmit={(e) => handleSubmit(e, address)}>
                    <li key={address._id}>
                        <p>{address.city}, {address.state} {address.postalcode}</p>
                        <p>{address.address}</p>
                        <p>Phone: {address.phone_no}</p>
                        <Button type="submit" size="large" variant="contained">Deliver Here</Button>
                    </li>
                    </form>

                ))}
                
                
                <p>{user?.user?.phoneNumber}</p>
            </div>
        </div>
    )
}