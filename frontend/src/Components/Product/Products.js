import React, {useContext} from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';
import { baseUrl } from '../../shared/baseUrl';
import Product from './Product';
import CartModal from '../Cart/Modal';
import CartContext from "../../Context/Cart/CartContext";

const Products = () => {

    const cartContext = useContext(CartContext);

    const [products, setProducts] = React.useState([]);
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
        <Product key={`prod_${product._id}`} product={product} />
    ); 

    const toggleModal = () => setModal(!modal);

    return (
        <div className="container">
            <h1 style={{color:"white", textAlign:"left", fontFamily:'Titillium Web'}}>Pizzas</h1>
            <hr style={{backgroundColor:"white"}}></hr>
            <Row xs="1" sm="2" md="4">
                {productList(pizzas)}
            </Row>
            <h1 style={{color:"white", textAlign:"left", fontFamily:'Titillium Web'}}>Beers</h1>
            <hr style={{backgroundColor:"white"}}></hr>
            <Row xs="1" sm="2" md="4">
                {productList(beers)}
            </Row>
            <div className="icon-bar">
                <img src="/cart_button_2.png" alt="cart-button-2" style={{width:"120px"}} onClick={function(e){toggleModal()}} />
                <span style={{color:"green", marginLeft:"-60px"}}>{cartContext.cart.items.length}</span>
            </div>

            <CartModal toggleModal={toggleModal} modal={modal} />

        </div>
    );
}

export default Products;
