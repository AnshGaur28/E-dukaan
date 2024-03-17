/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Button } from "@mui/material";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart } from "../../../State/Cart/Action";
import { api , API_BASE_URL} from "../../../config/apiConfig";

export default function Cart(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart } = useSelector(store=>store);

    const handleCheckout = ()=>{
        navigate('/checkout/?step=2')
    }
    const cartItems = cart.cartItems ;

    useEffect(()=>{
        dispatch(getCart())
        // console.log(cart);
    }, [dispatch]);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const productPromises = cart.cartItems.map(async (item) => {
                const response = await api.get(`${API_BASE_URL}/api/product/id/${item.product}`);
                return { product: response.data, cartItemId: item._id };
            });

            try {
                const productDetails = await Promise.all(productPromises);
                // console.log(productPromises , productDetails);
                setProducts(productDetails);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProductDetails();
    }, [cart.cartItems , cart]);
    
    return (
        <div >
            <div className="lg:grid grid-cols-3 relative lg:px-16">
                <div className="col-span-2">{products.map((item)=><CartItem item={item.product} cartItemId = {item.cartItemId} />)}</div>

                <div className="sticky top-0 h-[100vh] p-5 mt-5 lg:mt-0 col-span-1">
                    <div className="border">
                        <p className="uppercase font-bold opacity-60 pb-4 px-5">Price Details</p>
                        <hr/>
                        <div className="space-y-3 font-semibold">
                            <div className="flex justify-between pt-3 text-black px-5">
                                <span>Price</span>
                                <span>$ {cart?.cart?.totalPrice}</span>
                            </div>

                            <div className="flex justify-between pt-3 text-black px-5">
                                <span>Discount</span>
                                <span className="text-green-500">-${cart?.cart?.discount}</span>
                            </div>

                            <div className="flex justify-between  pt-3 text-black px-5">
                                <span>Delivery Charge</span>
                                <span className="  text-gray-500 line-through">$2.1</span>
                                <span className="  text-green-500">FREE</span>
                            </div>
                            <hr/>
                            <div className="flex justify-between pt-3 text-black p-5">
                                <span className="font-bold">Total Amount</span>
                                <span className="text-green-500">${cart?.cart?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckout} variant="contained" className="w-full mt-5" sx={{px:'2.5rem' ,py:'0.7rem' ,  bgcolor:"#9155fd"}}>Checkout</Button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}