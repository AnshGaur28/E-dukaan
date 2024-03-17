const orderService = require('../services/order.service.js')
const createOrder = async(req, res)=>{
    const user = req.user ;
    // console.log(user);
    // console.log(req.body);
    try{
        let createdOrder = await orderService.createOrder(user, req.body);
        return res.status(200).send(createdOrder);
    }
    catch(error){
        return res.status(500).send({error : error.message});
    }
}

const findOrderById = async (req , res)=>{
    try{
        let order = await orderService.findOrderById(req.params.id);
        return order;
    }
    catch(error){
        console.log(error.message);
        return res.status(500).send({error : error.message});
    }

}

const findOrderUsingId = async (orderId)=>{
    try{
        let order = await orderService.findOrderById(orderId);
        return order;
    }
    catch(error){
        console.log(error.message);
        return res.status(500).send({error : error.message});
    }

}


const orderHistory = async (req, res)=>{
    const user = req.user ;
    try{
        let orderHistory = orderService.usersOrderHistory(user._id);
        return res.status(200).send(orderHistory);

    }
    catch(error){
        return res.status(500).send({error : error.message});
    }
}

module.exports = {
    orderHistory , createOrder , findOrderById , findOrderUsingId
}