import React from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';
import { baseUrl } from '../../shared/baseUrl';
import Product from './Product';
import CartModal from '../Cart/Modal';

const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [cart, setCart]         = React.useState({items:[],total_amount:0});
    const [modal, setModal]       = React.useState(false);

    React.useEffect(() => {
        axios.get(baseUrl+'dishes')
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => console.error(error));
    }, []);

    var pizzas = [];
    var beers  = [];
    var i;
    for (i=0; i < products.length; i++) {
        if (products[i].category === 'pizzas') pizzas.push(products[i]);
        if (products[i].category === 'beers') beers.push(products[i]);
    }

    const productList = (products) => products.map((product) => 
        <Product key={`prod_${product._id}`} product={product} setCart={setCart} cart={cart}/>
    ); 

    const toggleModal = () => setModal(!modal);

    return (
        <div className="container">
            <h1 style={{color:"white", textAlign:"left", fontFamily:'Titillium Web'}}>Pizzas</h1>
            <hr style={{backgroundColor:"white"}}></hr>
            <Row md="4">
                {productList(pizzas)}
            </Row>
            <h1 style={{color:"white", textAlign:"left", fontFamily:'Titillium Web'}}>Beers</h1>
            <hr style={{backgroundColor:"white"}}></hr>
            <Row md="4">
                {productList(beers)}
            </Row>
            <div className="icon-bar">
                <img src="/cart_button_2.png" alt="cart-button-2" style={{width:"120px"}} onClick={function(e){toggleModal()}} />
                <span style={{color:"green", marginLeft:"-60px"}}>{cart.items.length}</span>
            </div>

            <CartModal cart={cart} toggleModal={toggleModal} modal={modal} />

        </div>
    );
}

export default Products;
