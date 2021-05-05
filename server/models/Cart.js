const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var cartSchema = mongoose.Schema({
    items: [
        {            
            dish: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Dish'
            },
            title: {
                type: String,
                required: true,
                default: ''
            },
            size: {
                type: String,
                default: 'lg'
            },
            quantity: {
                type: Number,
                required: true,
                min: 0
            },
            unit_price: {
                type: Currency,
                required: true,
                min: 0
            }
        }
    ],
    total_amount: {
        type: Currency,
        required: true,
        min: 0
    }
});

module.exports = mongoose.model('Cart', cartSchema);