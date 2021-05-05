const mongoose  = require('mongoose');
const Cart      = require('../models/Cart');

const url       = 'mongodb://localhost:27017/mercadoPago';
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, () => 
    console.log('connected to DB!')
);
mongoose.set('useCreateIndex', true);


Cart.deleteMany().then(() => {
    var carts = [
        new Cart({
            items: [
                {
                    "dish": "607c84a92388fa08ec814e2e",
                    "title": "Pizza Muzarella",
                    "size": "md",
                    "quantity": 2,
                    "unit_price": 600,
                },{
                    "dish": "607c84a92388fa08ec814e32",
                    "title": "Pizza Napolitana",
                    "size": "ls",
                    "quantity": 1,
                    "unit_price": 700,
                },{
                    "dish": "607c84a92388fa08ec814e4f",
                    "title": "Patagonia Amber Lager",
                    "size": "473cc",
                    "quantity": 2,
                    "unit_price": 200,
                }
            ],
            total_amount: 2300,
        }),
    ];
    
    var done = 0;
    for (var i = 0; i < carts.length; i++) {
        carts[i].save(function(err,result){
            done++;
            if (done == carts.length) {
                console.log('seeds OK');
                disconnectDB();
            }
        });
    }
})
    
function disconnectDB(){
    mongoose.disconnect();
    console.log('disconnected');
}