import { Route, Routes, useNavigate } from "react-router-dom";
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
    const jwt = localStorage.getItem('jwt');
    const Navigate = useNavigate() ; 
    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <Routes>
                <Route path='/' element={<div className='-z-10'><HomePage/></div>} />
                
                <Route 
                    path='/:levelOne/:levelTwo/:levelThree' 
                    element={jwt 
                        ? <div className='-z-10'><Product/></div> 
                        : 
                            <>
                            <Navigate to="/login" /> 
                            <HomePage/>
                            </>

                    } 
                />

                <Route path='/register' element={<div className='-z-10'><HomePage/></div>} />
                <Route path='/login' element={<div className='-z-10'><HomePage/></div>} />

                <Route 
                    path='/cart' 
                    element={jwt 
                        ? <Cart/> 
                        : <>
                            <HomePage/>
                          </>
                    } 
                />
                
                <Route 
                    path='/order' 
                    element={jwt 
                        ? <Order/> 
                        : <>
                            <HomePage/>
                          </>
                    } 
                />

                <Route 
                    path='/order/:OrderID' 
                    element={jwt 
                        ? <OrderDetails/> 
                        : <>
                            <HomePage/>
                          </>
                    } 
                />

                <Route 
                    path='/checkout' 
                    element={jwt 
                        ? <Checkout/> 
                        : <>
                            <HomePage/>
                          </>
                    } 
                />

                <Route 
                    path='/product/:productID' 
                    element={jwt 
                        ? <div className='-z-10'><ProductDetails/></div> 
                        : <>
                            <HomePage/>
                          </>
                    } 
                />

                <Route 
                    path='/payment/:orderId' 
                    element={jwt 
                        ? <PaymentSucess/> 
                        : <>
                            <HomePage/>
                          </>
                    } 
                /> 
            </Routes>

            <div><ColorInversionFooter/></div>
        </div>
    )
}