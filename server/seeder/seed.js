const mongoose  = require('mongoose');
const Dish      = require('../models/Dish');

const url       = 'mongodb://localhost:27017/mercadoPago';
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, () => 
    console.log('connected to DB!')
);
mongoose.set('useCreateIndex', true);


Dish.deleteMany().then(() => {
    var dishes = [
        new Dish({
            "name": "Pizza Muzarella",
            "description": "Muzzarella, salsa de tomate, orégano y aceitunas.",
            "image": "/mozzarella.jpg",
            "category": "pizzas",
            "price": 500,
            "prices": [
                {
                    size: 'small',
                    amount: 500
                },
                {
                    size: 'medium',
                    amount: 600
                },
                {
                    size: 'large',
                    amount: 700
                },
            ],
        }),
        new Dish({
            "name": "Pizza Napolitana",
            "description": "Muzzarella, salsa de tomate, rodajas de tomate, ajo y orégano.",
            "image": "/napolitana.jpg",
            "category": "pizzas",
            "price": 500,
            "prices": [
                {
                    size: 'small',
                    amount: 500
                },
                {
                    size: 'medium',
                    amount: 600
                },
                {
                    size: 'large',
                    amount: 700
                },
            ],
        }),
        new Dish({
            "name": "Pizza fugazzeta",
            "description": "Muzzarella, cebolla, orégano, y aceitunas negras.",
            "image": "/fugazzeta.jpg",
            "category": "pizzas",
            "price": 500,
            "prices": [
                {
                    size: 'small',
                    amount: 500
                },
                {
                    size: 'medium',
                    amount: 600
                },
                {
                    size: 'large',
                    amount: 700
                },
            ],
        }),
        new Dish({
            "name": "Pizza con jamón y morrones",
            "description": "Muzzarella, salsa de tomate, jamón, morrones, orégano y aceitunas.",
            "image": "/jam.jpg",
            "category": "pizzas",
            "price": 500,
            "prices": [
                {
                    size: 'small',
                    amount: 500
                },
                {
                    size: 'medium',
                    amount: 600
                },
                {
                    size: 'large',
                    amount: 700
                },
            ],
        }),
        new Dish({
            "name": "Pizza con panceta",
            "description": "Muzzarella, panceta, salsa de tomate y orégano.",
            "image": "/panceta.jpg",
            "category": "pizzas",
            "price": 500,
            "prices": [
                {
                    size: 'small',
                    amount: 500
                },
                {
                    size: 'medium',
                    amount: 600
                },
                {
                    size: 'large',
                    amount: 700
                },
            ],
        }),
        new Dish({
            "name": "Pizza con queso provolone",
            "description": "Muzzarella, salsa de tomate, provolone, orégano y aceitunas negras.",
            "image": "/provolone.jpg",
            "category": "pizzas",
            "price": 500,
            "prices": [
                {
                    size: 'small',
                    amount: 500
                },
                {
                    size: 'medium',
                    amount: 600
                },
                {
                    size: 'large',
                    amount: 700
                },
            ],
        }),
        new Dish({
            "name": "Pizza con rúcula",
            "description": "Salsa de tomate, rúcula fresca, lluvia de provolone y orégano.",
            "image": "/rucula.jpg",
            "category": "pizzas",
            "price": 500,
            "prices": [
                {
                    size: 'small',
                    amount: 500
                },
                {
                    size: 'medium',
                    amount: 600
                },
                {
                    size: 'large',
                    amount: 700
                },
            ],
        }),
        new Dish({
            "name": "Pizza calabresa",
            "description": "Muzzarella y longaniza.",
            "image": "/calabresa.jpg",
            "category": "pizzas",
            "price": 500,
            "prices": [
                {
                    size: 'small',
                    amount: 500
                },
                {
                    size: 'medium',
                    amount: 600
                },
                {
                    size: 'large',
                    amount: 700
                },
            ],
        }),
        new Dish({
            "name": "Buzz Light Beer",
            "description": "This beer will take you to infinity and beyond!.",
            "image": "/beer_2.jpg",
            "category": "beers",
            "price": 300,
            "prices": [
                {
                    size: '473cc',
                    amount: 200
                },
                {
                    size: '950cc',
                    amount: 350
                },
            ],
        }),
        new Dish({
            "name": "Sheriff Woody Ale",
            "description": "It will make you feel like you have a snake in your boot.",
            "image": "/woody_ale.jpg",
            "category": "beers",
            "price": 300,
            "prices": [
                {
                    size: '473cc',
                    amount: 200
                },
                {
                    size: '950cc',
                    amount: 350
                },
            ],
        }),
    ];
    
    var done = 0;
    for (var i = 0; i < dishes.length; i++) {
        dishes[i].save(function(err,result){
            done++;
            if (done == dishes.length) {
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