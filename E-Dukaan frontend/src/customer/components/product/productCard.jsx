/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import './productCard.css'
export default function ProductCard({product}){
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/product/${product._id}`)} className="productCard w-[15rem]  m-3 transition-all cursor-pointer">
            <div className="h-[20rem] ">
                <img className="object-cover object-top-left h-full w-full" src={product.imageUrl}  alt=""/>
            </div>
            <div className="textPart bg-white p-3 ">
                <div>
                    <p className="font-bold opacity-60">{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className="flex item-center space-x-2">
                    <p className="font-semibold">${product.discountedPrice}</p>
                    <p className="line-through opacity-50"> ${product.price}</p>
                    <p className="text-green-600 font-semibold">{product.discountPercent}% off</p>
                </div>
            </div>
        </div>
    )
}