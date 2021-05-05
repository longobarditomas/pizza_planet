import React from 'react';
import { Button, Row, Col, FormGroup, Label, ModalBody, ModalFooter } from 'reactstrap';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';

const OrderForm = (props) => {
    return (
        <AvForm onSubmit={props.handleSubmit}>
            <ModalBody style={{minHeight:"160px"}}>
                <div className="container">
                    <h5>Finish your order!</h5>
                    <FormGroup>
                        <Label>Name*</Label>
                        <AvField type="text" name="name" id="name" required placeholder="John Doe"></AvField>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email*</Label>
                        <AvField type="email" name="email" id="email" required placeholder="john_doe@gmail.com"></AvField>
                    </FormGroup>
                    <Row>
                        <Col md="3">
                            <AvGroup>
                                <Label>Area Code*</Label>
                                <AvField type="text" name="area_code" id="area_code" required placeholder="011"></AvField>
                            </AvGroup>
                        </Col>
                        <Col md="9">
                            <AvGroup>
                                <Label>Number*</Label>
                                <AvField type="number" name="number" id="number" required placeholder=""></AvField>
                            </AvGroup>
                        </Col>
                    </Row>
                { props.shippingCost > 0 ?
                    <Row>
                        <Col md="3">
                            <AvGroup>
                                <Label>Zip Code*</Label>
                                <AvField type="text" name="zip_code" id="zip_code" required placeholder=""></AvField>
                            </AvGroup>
                        </Col>
                        <Col md="5">
                            <AvGroup>
                                <Label>Street Name*</Label>
                                <AvField type="text" name="street_name" id="street_name" required placeholder=""></AvField>
                            </AvGroup>
                        </Col>
                        <Col md="4">
                            <AvGroup>
                                <Label>Street Number*</Label>
                                <AvField type="number" name="street_number" id="street_number" required placeholder=""></AvField>
                            </AvGroup>
                        </Col>
                    </Row>
                : ''}
                </div>
            </ModalBody>
            <ModalFooter>
                <Button outline onClick={function(e){props.toggleOrderView()}} color="danger">Back</Button>
                <Button outline type="submit" color="success">Pay</Button>
            </ModalFooter>
        </AvForm>
    );
}

export default OrderForm;