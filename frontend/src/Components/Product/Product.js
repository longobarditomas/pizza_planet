import React, {Component} from 'react'
import {Button, Col, Card, CardBody, CardFooter, CardTitle, CardImg} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: this.props.product._id,
            title: this.props.product.name,
            size: this.props.product.prices[0].size,
            unit_price: this.props.product.prices[0].amount,
            quantity: 1,
        };
        this.handleSizeSize = this.handleSizeSize.bind(this);
    }
    
    handleSize(size) {
        this.setState({
            size: size.size,
            price: size.amount,
        });
    }

    handleSizeSize(event) {
        this.setState({
            size: this.props.product.prices[event.target.value].size,
            unit_price: this.props.product.prices[event.target.value].amount,
        });
    }
    
    render() {
        return (
            <Col key={`dish_${this.props.product._id}`} style={{paddingBottom:"40px"}}>
                <Card style={{backgroundColor:"red"}}>
                    <CardImg top src={this.props.product.image} alt="pizza_rucula" />
                    <CardBody style={{minHeight:"160px", backgroundColor:"white"}}>
                        <CardTitle tag="h6">{this.props.product.name}</CardTitle>
                        <p>{this.props.product.description}</p>
                    </CardBody>
                    <CardFooter style={{backgroundColor:"white"}}>
                        <div className="row">
                            <div className="col-12" style={{textAlign:"center", paddingBottom:"14px"}}>
                                <Button onClick={() => this.state.quantity > 1 ? this.setState({ quantity: this.state.quantity - 1 }) : ''} style={{backgroundColor:"red", border:"none", color:"white"}} size="sm">-</Button>
                                <span style={{paddingLeft:"6px",paddingRight:"6px"}}>{this.state.quantity}</span>
                                <Button onClick={() => this.setState({ quantity: this.state.quantity + 1 })} style={{backgroundColor:"red", border:"none", color:"white"}} size="sm">+</Button>
                            </div>
                            <div className="col-12" style={{paddingBottom:"14px"}}>
                            <AvForm>
                                <AvField type="select" name="select" size="sm" onChange={this.handleSizeSize}>
                                {this.props.product.prices.map((price, index) => 
                                    <option name="pprices" key={price._id} value={index}>{price.size}: ${price.amount}</option>
                                )}
                                </AvField>
                            </AvForm>

                            </div>
                            <div className="col-12" style={{textAlign:"right"}}>
                                <Button type="button" onClick={() => this.props.setCart({items:[...this.props.cart.items, this.state], total_amount: this.props.cart.total_amount + this.state.unit_price*this.state.quantity})} color="success" size="sm" style={{width:"100%", backgroundColor:"red", border:"none", color:"white"}}>
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add
                                </Button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </Col>
        );
    }
}

export default Product