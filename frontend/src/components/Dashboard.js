import React, { useState } from "react";
import './Dashboard.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import AddModal from "./addModal";

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    return (
        <Container fluid="md" style={{paddingTop: 100}}>
            <Col>
                <Row>
                    <Col>
                        <h4 className="welcome-title" style={{paddingTop: 20}}>Welcome to DBS, User!</h4>
                    </Col>
                    <Col> 
                        <div className="d-flex justify-content-end">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant="danger" className='dropdown-header'>
                                    Accounts
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/account-1">Account 1</Dropdown.Item>
                                    <Dropdown.Item href="#/account-2">Account 2</Dropdown.Item>
                                    <Dropdown.Item href="#/account-3">Account 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        
                        
                    </Col>
                </Row>
                <h4 className="title-header">Account Details</h4>
                        <Card className="card-format">
                            <Card.Body>
                                <Row> 
                                    <Col>
                                        <h5 className="card-left">Account ID:</h5>
                                        <h5 className="card-left">Type:</h5>
                                        <h5 className="card-left">Balance:</h5>
                                    </Col>
                                    <Col>
                                        <h5 className="card-right">ASD123</h5>
                                        <h5 className="card-right">Checking</h5>
                                        <h5 className="card-right">1234 SGD</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                    </Card>
                <Row>

                </Row>
                <Row>
                    <div>
                        <br />
                        <h4 className="title-header">Scheduled Transactions</h4>
                    </div>
                    <Container> 
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>AccountID</th>
                                    <th>ReceivingAccountID</th>
                                    <th>Date</th>
                                    <th>Transaction Amount</th>
                                    <th>Comment</th>
                                    <th>-</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>621156213</td>
                                    <td>339657462</td>
                                    <td>2022-11-08T04:00:00.000Z</td>
                                    <td>500.0</td>
                                    <td>Monthly Pocket Money</td>
                                    <td><Button className="delete-button" variant="danger">Delete</Button></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>621156213</td>
                                    <td>339657462</td>
                                    <td>2022-11-08T04:00:00.000Z</td>
                                    <td>500.0</td>
                                    <td>Monthly Pocket Money</td>
                                    <td><Button className="delete-button" variant="danger">Delete</Button></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>621156213</td>
                                    <td>339657462</td>
                                    <td>2022-11-08T04:00:00.000Z</td>
                                    <td>500.0</td>
                                    <td>Monthly Pocket Money</td>
                                    <td><Button className="delete-button" variant="danger">Delete</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                        
                        <div className="d-flex justify-content-end"> 
                            <Button className="add-button" variant="success" size="md" onClick={handleShow}>
                                Add New Transaction
                            </Button>
                            <AddModal show={show} handleClose={handleClose} />
                        </div>

                    </Container>

                </Row>
                <Row>

                </Row>
            </Col>
        </Container>
    );
};

export default Dashboard;
