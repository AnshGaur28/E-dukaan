import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/homepage/homepage";
import Cart from "../customer/components/cart/Cart";
import Order from "../customer/components/Order/Order";
import Navigation from "../customer/components/navigation";
import ColorInversionFooter from "../customer/components/footer";
import Product from "../customer/components/product/product";
import ProductDetails from "../customer/components/productDetails/productDetails";
import Checkout from "../customer/components/checkout/Chekout";
import OrderDetails from "../customer/components/Order/OrderDetail";
import { PaymentSucess } from "../customer/components/payment/paymentSuccess";
export default function CustomerRoutes(){
    return (
        <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<div className='-z-10'><HomePage/></div>}/>
            <Route path='/register' element={<div className='-z-10'><HomePage/></div>}/>
            <Route path='/login' element={<div className='-z-10'><HomePage/></div>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/order/:OrderID' element={<OrderDetails/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<div className='-z-10'><Product/></div>}/>
            <Route path='/product/:productID' element={<div className='-z-10'><ProductDetails/></div>}/>
            <Route path='/payment/:orderId' element={<PaymentSucess/>}/>
        </Routes>

        <div><ColorInversionFooter/></div>
        </div>
    )
}