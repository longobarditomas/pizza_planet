const Cart = require('../models/Cart');

exports.index = (req, res, next) => {
    Cart.find()
    .populate('products.dish', 'name')
    .then((carts) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(carts);
    }, (err) => next(err))
    .catch((err) => next(err));
}

exports.create = async function (req, res, next) {
    Cart.create(req.body)
    .then((cart) => {
        console.log('Cart Created ', cart);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(cart);
    }, (err) => next(err))
    .catch((err) => next(err));
};