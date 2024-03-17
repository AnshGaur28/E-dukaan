/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Button } from "@mui/material";
import AddressCard from "../AddressCard/addressCard";
import CartItem from "../cart/CartItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { GET_ORDER_BY_ID_REQUEST } from "../../../State/Order/ActionType";
import ShippingAddress from "./ShippingAddress";
import { createPayment } from "../../../State/payment/Action";

export default function OrderSummary(){

    const {order} = useSelector(store=>store);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const order_id = searchParams.get('order_id');

    useEffect(()=>{
        dispatch(getOrderById(order_id));
    },[order_id , dispatch]  );

    useEffect(() => {
        if (order && order.order && order.order.orderItems) {
            // console.log(order.order);
            const newProducts =  order.order.orderItems.map(item => item.product);
            // console.log(newProducts);
            setProducts(newProducts);
            // console.log(products);

        }
    }, [order]);

    const handleSubmit = (e)=>{
        dispatch(createPayment(order_id));
    }
    return (
        <div>
            <div className="shadow-lg rounded-s-md border p-5">
                <ShippingAddress user ={order?.order?.shippingAddress}/>
            </div>
            <div className="grid grid-cols-3 lg:px-16 relative" >
                <div className="col-span-2">
                    {products?.map((item)=><CartItem cartItemId={item.id} item={item}/>)}
                </div>
                <div className="sticky top-0 h-[100vh] p-5 mt-5 lg:mt-0 col-span-1">
                    <div className="border">
                        <p className="uppercase font-bold opacity-60 pb-4 px-5">Price Details</p>
                        <hr/>
                        <div className="space-y-3 font-semibold">
                            <div className="flex justify-between pt-3 text-black px-5">
                                <span>Price</span>
                                <span>${order?.order?.totalPrice}</span>
                            </div>

                            <div className="flex justify-between pt-3 text-black px-5">
                                <span>Discount</span>
                                <span className="text-green-500">${order?.order?.totalPrice - order?.order?.totalDiscountedPrice}</span>
                            </div>

                            <div className="flex justify-between  pt-3 text-black px-5">
                                <span>Delivery Charge</span>
                                <span className="  text-gray-500 line-through">$2.1</span>
                                <span className="  text-green-500">FREE</span>
                            </div>
                            <hr/>
                            <div className="flex justify-between pt-3 text-black p-5">
                                <span className="font-bold">Total Amount</span>
                                <span className="text-green-500">${order?.order?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <Button type="submit" onClick={handleSubmit} variant="contained" className="w-full mt-5" sx={{px:'2.5rem' ,py:'0.7rem' ,  bgcolor:"#9155fd"}}>Buy</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}