import React from "react";
import './Dashboard.css'; 
import { Button, Modal, Form, Dropdown, Container} from "react-bootstrap";

const AddModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} style={{borderRadius: 0}}>
            <Modal.Header closeButton>
                <Modal.Title>Add Scheduled Transaction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Account ID</Form.Label>
                        <Container fluid="md">
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Accounts
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/account-1">Account 1</Dropdown.Item>
                                    <Dropdown.Item href="#/account-2">Account 2</Dropdown.Item>
                                    <Dropdown.Item href="#/account-3">Account 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Container>
                    </Form.Group>
                    {/* <Form.Label>Account ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Account ID" />*/}
                    <Form.Group>
                        <Form.Label>Receiving Account ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Receiving Account ID" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" placeholder="Enter a date" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Transaction Amount</Form.Label>
                        <Form.Control type="number" placeholder="Enter transaction amount" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" placeholder="Enter comments" />
                    </Form.Group>
                    <br/>
                    <Button variant="primary">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddModal;