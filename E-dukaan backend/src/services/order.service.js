const Address = require('../models/address.model.js');
const { Order } = require('../models/order.model.js');
const cartService = require('../services/cart.service.js');
const OrderItems =  require('../models/orderItems.model.js');


const createOrder = async (user, shippingAddress) => {
    let address;
    // console.log("shippingAddress" , shippingAddress);
    // console.log(user);
    try {
        if (shippingAddress._id) {
            let isExist = await Address.findById(shippingAddress._id);
            address = isExist;
        }
        else {
            address = new Address(shippingAddress);
            address.user = user;
            await address.save();
            // console.log(address);
            user.address.push(address);
            await user.save();
        }
    }
    catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];
    for (const item of cart.cartItems) {
        const orderItem = new OrderItems({
            price: item.price,
            product: item.product,
            size: item.size,
            userId: item.userId,
            quantity: item.quantity,
            discountedPrice: item.discountedPrice,
        })
        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem);
    }

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        totalDiscount: cart.discount,
        totalItem: cart.totalItem,
        shippingAddress : address,
    });
    const savedOrder = await createdOrder.save();
    savedOrder.populate('shippingAddress');
    console.log(savedOrder);
    return savedOrder;
};

const placeOrder = async (orderId) => {
    try {
        const order = findOrderById(orderId);
        order.orderStatus = "PLACED";
        order.paymentDetails.status = "COMPLETED";
        return await order.save();
    } catch (error) {
        throw new Error(error.message);
    }
};

const confirmOrder = async (orderId) => {
    try {
        const order = findOrderById(orderId);
        order.orderStatus = "CONFIRM";
        return await order.save();
    } catch (error) {
        throw new Error(error.message);
    }
};


const shipOrder = async (orderId) => {
    try {
        const order = findOrderById(orderId);
        order.orderStatus = "SHIPPED";
        return await order.save();
    } catch (error) {
        throw new Error(error.message);
    }
};


const cancelledOrder = async (orderId) => {
    try {
        const order = findOrderById(orderId);
        order.orderStatus = "CANCELLED";
        return await order.save();
    } catch (error) {
        throw new Error(error.message);
    }
};


const deliverOrder = async (orderId) => {
    try {
        const order = findOrderById(orderId);
        order.orderStatus = "DELIVERED";
        return await order.save();
    } catch (error) {
        throw new Error(error.message);
    }
};

const findOrderById = async (orderId) => {
    console.log(orderId);
    const order = await Order.findById(orderId)
        .populate("user")
        .populate({ path: "orderItems", populate: { path: "product" } })
        .populate("shippingAddress");
    console.log("order" , order);
    return order;
}

const usersOrderHistory = async (userId) => {
    try {
        const orders = Order.find({ user: userId, status: "PLACED" })
            .populate({ path: "orderItems", populate: { path: "products" } }).lean();
        return orders;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const getAllOrders = async (userId) => {
    try {
        return await Order.find({ user: userId, status: "PLACED" })
            .populate({ path: "orderItems", populate: { path: "products" } }).lean();
    } catch (error) {
        throw new Error(error.message);
    }
}

async function deleteOrder(orderId) {
    const order = await Order.findById(orderId);
    await Order.findByIdAndDelete(order._id);
}

module.exports = { getAllOrders, deleteOrder, usersOrderHistory, findOrderById, deliverOrder, confirmOrder, shipOrder, placeOrder, createOrder , cancelledOrder };