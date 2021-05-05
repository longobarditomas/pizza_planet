const {createPaymentLink, finishPayment} = require('../services/PaymentService');
const {createOrder} = require('../services/OrderService');
const {sendOrder}   = require('../services/MailService');

exports.finish =  async function (req, res, next) {
    var p;
    const token = process.env.ACCESS_TOKEN;
    try {
        p = await finishPayment(req.query.preference_id)
    } catch (error) {
        console.log(error);
    }
    if (req.query.status[0] == 'pending') res.redirect(process.env.FRONTEND_URL+'payment_confirmation');
    else res.redirect(process.env.FRONTEND_URL+'payment_confirmation');
    sendOrder(p.data);
}; 

exports.create = async function (req, res, next) {
    try {
        const mp    = await createPaymentLink(req.body)
        createOrder(req.body.cart, req.body.payer, mp.body.id)
        
        var initUrl = mp.body.init_point;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(initUrl);
        return res;
    } catch(e) {
        res.end(e.message || e.toString());
    }
};