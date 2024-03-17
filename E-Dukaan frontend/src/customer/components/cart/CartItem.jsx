
/* eslint-disable react/prop-types */
// import {DeleteIcon} from '@mui/icons-material/Delete';

import { useDispatch } from "react-redux"
import { removeCartItem } from "../../../State/Cart/Action";
import { useLocation } from "react-router-dom";


export default function CartItem({cartItemId , item }) {
    // console.log(item);
    const location =  useLocation(); 
    const searchParams = new URLSearchParams(location.search);
    const order_id = searchParams.get('order_id');
    const dispatch = useDispatch();
    const handleRemove = (event)=>{
        // console.log(cartId);
        dispatch(removeCartItem(cartItemId));
        window.location.reload();
    }
    return (
        <div className="p-5  shadow-xl rounded-md border-gray-200 border-[1px] my-5">
            <div className="flex item-center">
                <div className="w-[10em] h-[10rem]  lg : w[9rem] lg : h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src={item?.imageUrl} />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold ">{item?.title}</p>
                    <p className="text-sm opacity-70 text-gray-500">Size : L,White</p>
                    <p className="text-sm mt-2 opacity-70 text-gray-500">Seller : {item?.brand}</p>
                    <div className="flex">
                        <p className=" text-gray-500 text-md line-through">${item?.price}</p>
                        <p className="ml-2 font-bold ">${item?.discountedPrice}</p>
                        <p className="ml-2 text-green-600 font-semibold">${item?.discount}% off</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-end p-2 m-2">
                {!order_id && <button onClick={handleRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>}
            </div>
        </div>

    )
}