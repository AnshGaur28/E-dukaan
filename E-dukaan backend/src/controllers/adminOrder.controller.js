const orderService =  require('../services/order.service.js');

const getAllOrders = async (req, res)=>{
    try{
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders);
    }
    catch(error){
        throw new Error(error.message);
    }

}

const confirmedOrders = async (req, res)=>{
    const orderId = req.params.orderId ;
    try{
        const orders = await orderService.confirmOrder(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        throw new Error(error.message);
    }

}

const shipOrder = async (req, res)=>{
    const orderId = req.params.orderId ;
    try{
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        throw new Error(error.message);
    }

}

const DeliverOrder = async (req, res)=>{
    const orderId = req.params.orderId ;
    try{
        const orders = await orderService.deliverOrder(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        throw new Error(error.message);
    }
}


const cancelledOrders = async (req, res)=>{
    const orderId = req.params.orderId ;
    try{
        const orders = await orderService.cancelledOrder(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        throw new Error(error.message);
    }
}



const deleteOrders = async (req, res)=>{
    const orderId = req.params.orderId ;
    try{
        const orders = await orderService.deleteOrders(orderId);
        return res.status(200).send(orders);
    }
    catch(error){
        throw new Error(error.message);
    }
}

module.exports = {getAllOrders , confirmedOrders , shipOrder , cancelledOrders , deleteOrders , DeliverOrder};


