const Order = require('../models/Order')

exports.index = (req,res,next) => {
    Order.find({})
    .populate({
        path: 'cart',
        populate: { path: 'products.dish', select: 'name' }
    })
    .then((orders) => {
        if(!orders) {
            var err = new Error('You don\'t have favorite dishes yet!');
            err.status = 404;
            return next(err);
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(orders);
    }, (err) => next(err))
    .catch((err) => next(err));
}

exports.create = async function (req, res, next) {
    Order.create(req.body)
    .then((order) => {
        console.log('Order Created ', order);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(order);
    }, (err) => next(err))
    .catch((err) => next(err));
};