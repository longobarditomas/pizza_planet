import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { baseUrl } from '../../shared/baseUrl';
import OrderForm from './OrderForm';
import CartForm from './CartForm';

const CartModal = (props) => {
    const [orderView, setOrderView]       = React.useState(false);
    const [shippingCost, setShippingCost] = React.useState(0);
    
    const toggleOrderView = () => {
        setOrderView(!orderView);
    }

    const handleChange = (event) => {
        setShippingCost(Number(event.target.value));
    }

    const handleSubmit = (event, errors, values) => {
        const order = {
            payer: {
                name: values.name,
                email: values.email,
                phone: {
                    area_code: values.area_code,
                    number: Number(values.number)
                },
                address: {
                    zip_code: values.zip_code ? values.zip_code : '',
                    street_name: values.street_name ? values.street_name : '',
                    street_number: values.street_number ? Number(values.street_number) : 0,
                }
            },
            cart: props.cart,
            shipments: {
                cost: shippingCost
            }
        }
        axios.post(baseUrl+'mercadopago/create', order)
        .then(response => {
            window.location = response.data;
        })
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggleModal} size="lg">
            <ModalHeader toggle={props.toggleModal}><img src="/cart_button.png" alt="cart-button" style={{width:"80px"}}/></ModalHeader>
        { orderView ?
            <OrderForm handleSubmit={handleSubmit} shippingCost={shippingCost} toggleOrderView={toggleOrderView}/>
        : props.cart.items.length > 0 ?
            <CartForm handleChange={handleChange} shippingCost={shippingCost} cart={props.cart} orderView={orderView} toggleOrderView={toggleOrderView} />
        :
            <div>
                <ModalBody style={{minHeight:"160px"}}>
                    <div>
                        <h5>You Cart is empty!</h5>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button outline onClick={props.toggleModal} color="secondary">Start buying</Button>
                </ModalFooter>
            </div>
        }
        </Modal>
    );
}

export default CartModal;
