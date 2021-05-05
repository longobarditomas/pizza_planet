import React from 'react';
import { Table, ModalBody, ModalFooter, Button } from 'reactstrap';
import { AvForm, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';

const CartForm = (props) => {

    const cartList = () => props.cart.items.map((item) => 
        <tr>
            <td>{item.title}</td>
            <td>{item.size}</td>
            <td>{item.quantity}</td>
            <td>${item.unit_price}</td>
            <td>${item.unit_price*item.quantity}</td>
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
                            </tr>
                        </thead>
                        <tbody>
                            {cartList()}
                            <tr>
                                <th colspan="4">Shipping cost</th>
                                <th>${props.shippingCost}</th>
                            </tr>
                            <tr>
                                <th colspan="4">Total Amount</th>
                                <th>${props.cart.total_amount+props.shippingCost}</th>
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