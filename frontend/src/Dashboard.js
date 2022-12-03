import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';

const Dashboard = () => {
    return (
        <Container fluid="md">
            <Col>
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row>
                    <Card className="text-center">
                        <Card.Header>Account Details</Card.Header>
                        <Card.Body>
                            <Card.Title>Account ID: ASD123</Card.Title>
                            <Card.Text>Type: Checking</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Balance: 1234</Card.Footer>
                    </Card>
                </Row>
                <Row>
                    <div>
                        <h2>Scheduled Transactions</h2>
                    </div>
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
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>621156213</td>
                                <td>339657462</td>
                                <td>2022-11-08T04:00:00.000Z</td>
                                <td>500.0</td>
                                <td>Monthly Pocket Money</td>
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>621156213</td>
                                <td>339657462</td>
                                <td>2022-11-08T04:00:00.000Z</td>
                                <td>500.0</td>
                                <td>Monthly Pocket Money</td>
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <div>
                        <h2>Add Scheduled Transaction</h2>
                    </div>

                    <Card style={{ width: '80%' }}>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Receiving Account ID</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Receiving Account ID" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Card.Footer>
                    </Card>
                </Row>
            </Col>
        </Container>
    );
};

export default Dashboard;
