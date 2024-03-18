const Razorpay = require('../config/razorpayclient.js');
const {findOrderById , findOrderUsingId} = require('../controllers/order.controller.js')

const  createPaymentLink = async (orderId)=>{
    const order = await findOrderUsingId(orderId);
    // console.log(order);
    try {
        const paymentLinkRequest = {
            amount  : order.totalPrice*100 ,
            currency : "INR" ,
            customer : {
                name : order.user.firstName+  " " + order.user.lastName ,
                contact : order.user.phone_no ,
                email : order.user.email ,
            },
            notify : {
                sms : true ,
                email : true ,
            },
            reminder_enable : true ,
            callback_url : `https://e-dukaaan.netlify.app`,
            callback_method : "get" ,
        }
        const paymentLink  = await Razorpay.paymentLink.create(paymentLinkRequest);
        const payment_link_url = paymentLink.short_url ;
        const paymentId = paymentLink.id ;
        const resData =  {
            paymentId , 
            payment_link_url ,
        }
        return resData ;
    }
    catch(error){
        console.log(error)
        throw new Error(error.message);
    }
}

const updatePaymentInfo =  async (reqData)=>{
    const paymentId =  reqData.paymentId ;
    const payment  = Razorpay.payments.fetch(paymentId);
    console.log(payment);
    try{
        const order = findOrderById(reqData.orderId);
       
        if(payment.status == "captured"){
            order.paymentDetails.paymentId = paymentId ;
            order.paymentDetails.paymentStatus =  "COMPLETED";
            order.orderStatus = "PLACED";
        }
        await order.save();
        return {message : "Your order is placed" , success : true};
    } catch(error){
        throw new Error(error);
    }

}

module.exports = {createPaymentLink , updatePaymentInfo} ;