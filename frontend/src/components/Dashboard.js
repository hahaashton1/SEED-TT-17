import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import AddModal from "./addModal";
import axios from "axios";

const Dashboard = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // bankaccounts/<userid>
    // bankaccounts 

    const [bankAccounts, setBankAccounts] = useState([]);
    const [scheduledTransactions, setScheduledTransactions] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState(null);

    const getBankAccounts = (userid) => {
        axios.get(`http://localhost:5001/accounts/${userid}`)
            .then((response) => {
                console.log(response.data);
                // setBankAccounts(response.data);
            });
    }

    const getScheduledTransactions = (userid) => {
        axios.get(`http://localhost:5001/scheduledtransactions/${userid}`)
            .then((response) => {
                console.log(response.data);
                // setScheduledTransactions(response.data);
            });
    }

    // Only load once on first render
    useEffect(() => {

        // Get userid from local storage
        const userid = localStorage.getItem("user_id");

        getBankAccounts(userid);
        getScheduledTransactions(userid);

    }, []);

    const handleDropChange = (e) => {
        console.log(e.target.value);

        // loop through bankAccounts
        bankAccounts.forEach((account, index) => {
            if (account.account_id === e.target.value) {
                console.log(account);
                setSelectedAccount(account);
            }
        });
    }

    return (
        <Container fluid="md">
            <Col>
                <Row>
                    <Dropdown onChange={(e) => handleDropChange(e)}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            {
                                bankAccounts.map((account) => {
                                    return (
                                        <Dropdown.Item value={account.AccountType}>{account.AccountType}</Dropdown.Item>
                                    );
                                })
                            }
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
                        {
                            // if selectedAccount is not empty
                            selectedAccount ? (
                                <>
                                    <Card.Body>
                                        <Card.Title>Account ID: {selectedAccount.AccountID}</Card.Title>
                                        <Card.Text>Type: {selectedAccount.AccountType}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Balance: {selectedAccount.Balance}</Card.Footer>
                                </>
                            ) :
                                (
                                    <>
                                        <Card.Body>
                                            <Card.Title>Account ID: -</Card.Title>
                                            <Card.Text>Type: -</Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">Balance: -</Card.Footer>
                                    </>
                                )
                        }
                    </Card>
                </Row>
                <Row>
                    
                </Row>
                <Row>
                    <div>
                        <br/>
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
