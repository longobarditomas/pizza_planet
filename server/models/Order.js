const mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    payer: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            area_code: {
                type: Number,
                required: true,
                min: 0
            },
            number: {
                type: Number,
                required: true,
                min: 0
            },
        },
        address: {
            zip_code: {
                type: String,
                default: ''
            },
            street_name: {
                type: String,
                default: ''
            },
            street_number: {
                type: Number,
                default: 0
            },
        }
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    payment: {
        id: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            default: ''
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);