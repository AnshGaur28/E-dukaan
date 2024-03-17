const Cart = require('../models/cart.model.js');
const CartItems = require('../models/cartItem.model.js');
const { Product } = require('../models/products.model');
const createCart = async (user) => {
    try {
        const cart = new Cart({ user });
        const createdCart = await cart.save();
        return createdCart;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const findUserCart = async (userId) => {
    try {
        
        let cart = await Cart.findOne({ user: userId }).populate({
            path: 'cartItems',
            populate: {
              path: 'product',
              model: 'products' // Make sure this matches your Product model name
            }
          }).lean();
        // console.log(cart);
        let cartitems = await CartItems.find({ cart: cart._id });
        // for (let cartItem of cartitems) {
        //     await cartItem.populate([{path :"product" , model:"products"}]);
        // }

        cart.cartItems = cartitems;
        let totalDiscountedPrice = 0;
        let totalPrice = 0;
        let totalItems = 0;

        for (let item of cart.cartItems) {
            totalPrice += item.price;
            totalDiscountedPrice += item.discountedPrice;
            totalItems += item.quantity;
        }

        cart.totalItem = totalItems;
        cart.totalPrice = totalPrice;
        cart.discount = totalPrice - totalDiscountedPrice;
        cart.totalDiscountedPrice = totalDiscountedPrice;
        // console.log(cart.totalDiscountedPrice);

        return cart;
    }
    catch (error) {
        throw new Error(error.message);
    }

}

const addCartItem = async (userId, req) => {
    try {
        let cart = await Cart.findOne({ user: userId });
        const product = await Product.findById(req.productId);
        const isPresent = await CartItems.findOne({ cart: cart._id, product: product._id, userId });
        if (!isPresent) {

            const cartItem = new CartItems({ product: product._id, cart: cart._id, quantity: 1, userId, price: product.price, size: req.size, discountedPrice: product.discountedPrice });
            const createdCartItem = await cartItem.save();
            // console.log(createdCartItem);
            await createdCartItem.populate('product');
            console.log(createdCartItem)
            await cart.cartItems.push(createdCartItem);
            await cart.save();
            return createdCartItem;
        }
        return "is Pressent" ;
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = { createCart, findUserCart, addCartItem };