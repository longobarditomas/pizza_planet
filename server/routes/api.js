const express = require('express')
const router  = express.Router()

var DishController    = require('../controllers/DishController')
var CartController    = require('../controllers/CartController')
var OrderController   = require('../controllers/OrderController')
var PaymentController = require('../controllers/PaymentController')

// DISH
router.route('/dishes')
.get(DishController.index)
.post(DishController.create)

// CART
router.route('/carts')
.get(CartController.index)
.post(CartController.create)

// ORDERS
router.route('/orders')
.get(OrderController.index)
.post(OrderController.create)

// PAYMENT
router.route('/mercadopago/create')
.post(PaymentController.create)
router.route('/mercadopago/finish')
.get(PaymentController.finish)

module.exports = router;