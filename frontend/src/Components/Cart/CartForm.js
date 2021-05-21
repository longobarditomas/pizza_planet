import React, { useContext } from "react";
import { Table, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import CartContext from "../../Context/Cart/CartContext";

const CartForm = (props) => {

    const cartContext = useContext(CartContext);
  
    const cartList = () => cartContext.cart.items.map((item) => 
        <tr key={item.dish}>
            <td>{item.title}</td>
            <td>{item.size}</td>
            <td>
                <Button onClick={() => cartContext.updateCartItemQuantity(item, 'decrement')} style={{backgroundColor:"red", border:"none", color:"white"}} size="sm">-</Button>
                <span style={{paddingLeft:"6px",paddingRight:"6px"}}>{item.quantity}</span>
                <Button onClick={() => cartContext.updateCartItemQuantity(item, 'increment')} style={{backgroundColor:"red", border:"none", color:"white"}} size="sm">+</Button>
            </td>
            <td>${item.unit_price}</td>
            <td>${item.unit_price*item.quantity}</td>
            <td onClick={function(e){cartContext.deleteCartItem(item)}}><i class="fa fa-trash" aria-hidden="true"></i></td>
        </tr>
    ); 

    return (
        <div>
            <ModalBody style={{minHeight:"160px"}}>
                <div className="container">
                    <AvForm model={{shipments_cost:(props.shippingCost ? "110" : "0")}}>
                        <AvRadioGroup name="shipments_cost" onChange={props.handleChange} label="Please Select" required >
                            <AvRadio label="Take Away. (123 Andy Davis Avenue, CABA)" value="0" checked />
                            <AvRadio label="Delivery. (Aditional cost: $110)" value="110" />
                        </AvRadioGroup>
                    </AvForm>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Quantity</th>
                                <th>Unit Amount</th>
                                <th>Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList()}
                            <tr>
                                <th colSpan="4">Shipping cost</th>
                                <th>${props.shippingCost}</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th colSpan="4">Total Amount</th>
                                <th>${cartContext.cart.total_amount+props.shippingCost}</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button outline onClick={function(e){props.toggleOrderView()}} color="danger">Continue</Button>
            </ModalFooter>
        </div>
    );
}

export default CartForm;