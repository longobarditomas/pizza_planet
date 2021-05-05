const mercadopago = require('mercadopago');
const axios       = require("axios"); 

const createPaymentLink = async (data) => {
    mercadopago.configure({
        access_token: process.env.ACCESS_TOKEN
    });
    try {
        let preference = {
            items: data.cart.items,
            payer: data.payer,
            shipments:{
                cost: data.shipments.cost,
                mode: "not_specified",
            },
            back_urls: {
                success: process.env.SERVER_URL+"mercadopago/finish?status=success", 
                pending: process.env.SERVER_URL+"mercadopago/finish?status=pending",
                failure: process.env.FRONTEND_URL+"payment_error",
            },
            auto_return: "approved",
            payment_methods: { 
                excluded_payment_methods: [{id: "mercadopago_cc"},{id: "naranja"},{id: "tarshop"},{id: "cabal"},{id: "cencosud"},{id: "diners"},{id: "argencard"},{id: "bapropagos"},{id: "cargavirtual"},{id: "cordobesa"},{id: "cmr"},{id: "consumer_credits"}],
                excluded_payment_types: [{ id: "atm" }], 
                installments: 3
            }
        };
        const mp = await mercadopago.preferences.create(preference);        
        return mp;
    } catch ( err ) {
        return { success: false, error: err };
    }
}

const finishPayment = async (preference_id) => {
    var p;
    const token = process.env.ACCESS_TOKEN;
    try {
        p = await axios.get("https://api.mercadopago.com/checkout/preferences/"+preference_id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return p;
    } catch ( err ) {
        return { success: false, error: err };
    }
}

module.exports = {
    createPaymentLink, 
    finishPayment
}