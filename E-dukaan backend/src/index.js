const express = require('express');
const cors  = require('cors') ;
const app = express() ;
require('dotenv').config();
app.use(express.json());
app.use(cors());

const authRouter = require('./routes/auth.routes.js');
const userRouter = require('./routes/user.routes.js');
const adminOrderRouter = require('./routes/adminOrder.route.js');
const adminProductRouter = require('./routes/adminProduct.routes.js');
const productRouter = require('./routes/product.routes.js');
const cartRouter = require('./routes/cart.routes.js');
const cartItemRouter = require('./routes/cartItem.routes.js');
const orderRouter = require('./routes/orders.routes.js');
const reviewRouter = require('./routes/review.route.js');
const ratingRouter = require('./routes/ratings.route.js');
const addressRouter = require('./routes/address.routes.js');
const paymentRouter =  require('./routes/payment.route.js');
//  middleware
app.use("/auth" , authRouter);
app.use('/api/users' , userRouter);
app.use('/api/product' , productRouter) ;
app.use('/api/admin/product' , adminProductRouter);
app.use('/api/admin/order' , adminOrderRouter);
app.use('/api/orders' , orderRouter);
app.use('/api/cart' , cartRouter);
app.use('/api/review' , reviewRouter);
app.use('/api/ratings' , ratingRouter);
app.use('/api/cartItem' , cartItemRouter);
app.use('/api/address',  addressRouter)
app.use('/api/payments' , paymentRouter);

app.get('/' ,(req, res)=>{
    return res.status(200).send({messgae : "Backend port Working"})
})
module.exports = app ;