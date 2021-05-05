const mongoose  = require('mongoose');
const Order     = require('../models/Order');

const url       = 'mongodb://localhost:27017/mercadoPago';
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, () => 
    console.log('connected to DB!')
);
mongoose.set('useCreateIndex', true);


Order.deleteMany().then(() => {
    var orders = [
        new Order({
            "payer": {
                "name": "Tom",
                "email": "tl@gmail.com",
                "phone": {
                    "area_code": 11,
                    "number": 10101010,
                },
                "address": {
                    "zip_code": "1425",
                    "street_name": "Laprida",
                    "street_number": "1307",
                }
            },
            "cart": "607cb102fa1be8119fed6560",
        }),
    ];
    
    var done = 0;
    for (var i = 0; i < orders.length; i++) {
        orders[i].save(function(err,result){
            done++;
            if (done == orders.length) {
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
