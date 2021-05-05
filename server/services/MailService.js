var nodemailer    = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});
 
const sendOrder = async (data) => {
    var productos   = "";
    var totalAmount = 0;
    for(var i=0;i<data.items.length;i++){
        if (data.items[i].title) {
            productos += '<p>x'+data.items[i].quantity+' '+data.items[i].title+' ($'+data.items[i].unit_price+' por unidad)</p><br>';
            totalAmount += data.items[i].unit_price;
        }
    }
    productos   += '<p>Shipping cost: $'+(data.shipments.cost > 0 ? data.shipments.cost : 0);
    totalAmount += data.shipments.cost;
    const mailOption = {
        from: process.env.ACCESS_TOKEN,
        to: data.payer.email,
        subject: 'Your Order!',
        text: 'Your Order!',
        html: '<h1 style="text-align: center"><b><i>Planet Pizza</i></b></h1><br><p>Hi '+data.payer.name+',</p><br><p>Thanks for your Purchase!</p><br><p>If you selected the Delivery option your order will be arriving in approximately 45 minutes. Otherwise we\'ll be waiting for you to withdraw your order in 30 minutes.</p><br><p><b>Order details:</b></p><br>'+productos+'<p><b>Total Amount</b> = $'+totalAmount+'</p><br><p>Best,</p><p>Planet Pizza</p>',
    };
    transporter.sendMail(mailOption, (error, info) => {
        if (error) return console.log(error)
        else console.log('Email Sent! ' + info.response);
    });
}

module.exports = {
    sendOrder
}