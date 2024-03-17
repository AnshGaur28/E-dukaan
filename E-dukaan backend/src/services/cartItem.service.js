const Cart = require('../models/cart.model')
const CartItem = require('../models/cartItem.model')
const userService = require('../services/user.services.js');

const updateCartItem = async (userId, cartItemId, cartItemData) => {
    const item = await findCartItemById(cartItemId);
    // console.log(item);
    // console.log(cartItemId);
    const user = await userService.getUserById(item.userId);
    console.log(user);
    try {
        if (!item) {
            throw new Error({ message: "No such cart item was found" });
        }
        if (!user) {
            throw new Error({ message: "No such user was found" });
        }
        if (user._id.toString() == userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;
            const updatedCartItem = await item.save();
            return updatedCartItem;
        }
        else {
            throw new Error({ message: "you can't update this cart item" });
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const findCartItemById = async (cartItemId) => {
    // console.log(cartItemId);
    const cartItem = await CartItem.findById(cartItemId).populate('product');
    console.log(cartItem);
    try {
        if (cartItem) {
            return cartItem;
        }
        else {
            // console.log(error.message);
            throw new Error({ message: "Cart item not found" });
        }
    }
    catch (error) {
        console.log(error);
        throw new Error({ message: error.message });
    }
}

const removeCartItem = async (userId, cartItemId) => {
    try {
        const cartItem = await findCartItemById(cartItemId);
        const user = await userService.getUserById(userId);
        console.log(cartItem , user);
        if (!cartItem.userId.toString() === user._id.toString()) {
            throw new Error({ message: "Not authorized to remove cart item" });
        }
        else {
            await CartItem.findByIdAndDelete(cartItemId);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}




module.exports = { removeCartItem, updateCartItem, findCartItemById };