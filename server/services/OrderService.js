const Cart        = require('../models/Cart');
const Order       = require('../models/Order');

const createOrder = async (cart, payer, mpId) => {
    try {
        var cart  = await Cart.create(cart);
        Order.create({
            payer: payer,
            cart: cart._id,
            payment: {
                id: mpId,
                status: 'pending'
            }
        });
        return { success: true };
    } catch ( err ) {
        console.log(err); 
        return { success: false, error: err };
    }
}

module.exports = {
    createOrder
}