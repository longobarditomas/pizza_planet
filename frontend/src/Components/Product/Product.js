import React, {useContext} from 'react'
import {Button, Col, Card, CardBody, CardFooter, CardTitle, CardImg} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import CartContext from "../../Context/Cart/CartContext";

const Product = (props) => {

    const cartContext = useContext(CartContext);

    const [size, setSize]         = React.useState(props.product.prices[0].size);
    const [price, setPrice]       = React.useState(props.product.prices[0].amount);
    const [quantity, setQuantity] = React.useState(1);

    const handleSize = (event) => {
        setSize(props.product.prices[event.target.value].size);
        setPrice(props.product.prices[event.target.value].amount);
    }

    const addItem = () => {
        cartContext.addCartItem({
            dish: props.product._id,
            quantity: quantity,
            size: size,
            title: props.product.name,
            unit_price: price,
        });
    }

    return (
        <Col key={`dish_${props.product._id}`} style={{paddingBottom:"40px"}}>
        <Card style={{backgroundColor:"red"}}>
            <CardImg top src={props.product.image} alt="pizza_rucula" />
            <CardBody style={{minHeight:"160px", backgroundColor:"white"}}>
                <CardTitle tag="h6">{props.product.name}</CardTitle>
                <p>{props.product.description}</p>
            </CardBody>
            <CardFooter style={{backgroundColor:"white"}}>
                <div className="row">
                    <div className="col-12" style={{textAlign:"center", paddingBottom:"14px"}}>
                        <Button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : ''} style={{backgroundColor:"red", border:"none", color:"white"}} size="sm">-</Button>
                        <span style={{paddingLeft:"6px",paddingRight:"6px"}}>{quantity}</span>
                        <Button onClick={() => setQuantity(quantity + 1)} style={{backgroundColor:"red", border:"none", color:"white"}} size="sm">+</Button>
                    </div>
                    <div className="col-12" style={{paddingBottom:"14px"}}>
                        <AvForm>
                            <AvField type="select" name="select" bsSize="sm" onChange={function(e){handleSize(e)}}>
                            {props.product.prices.map((price, index) => 
                                <option name="pprices" key={price._id} value={index}>{price.size}: ${price.amount}</option>
                            )}
                            </AvField>
                        </AvForm>
                    </div>
                    <div className="col-12" style={{textAlign:"right"}}>
                        <Button type="button" onClick={addItem} color="success" size="sm" style={{width:"100%", backgroundColor:"red", border:"none", color:"white"}}>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    </Col>
    );
}

export default Product