import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import AddModal from "./addModal";
import {
  getBankAccounts,
  getScheduledTransactions,
  getUserScheduledTransactions,
} from "../services/BankAccounts";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // bankaccounts/<userid>
  // bankaccounts

  const [bankAccounts, setBankAccounts] = useState([]);
  const [userid, setUserId] = useState(0);
  const [scheduledTransactions, setScheduledTransactions] = useState([]);
  const [displayScheduledTransactions, setDisplayScheduledTransactions] =
    useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const getBankAccountsHandler = async () => {
    const getUserId = JSON.parse(window.localStorage.getItem("userObject"));

    const row = await getBankAccounts(getUserId.UserID);
    if (row) {
      console.log(row.data);
      setBankAccounts([...row.data]);
    }
  };

  const getScheduledTransactionsHandler = async () => {
    const getUserId = JSON.parse(window.localStorage.getItem("userObject"));
    const row = await getScheduledTransactions(getUserId.UserID);
    if (row) {
      setBankAccounts([...row.data]);
    }
  };

  // Only load once on first render
  useEffect(() => {
    // Get userid from local storage
    const getUserId = JSON.parse(window.localStorage.getItem("userObject"));
    setUserId(getUserId.UserID);

    getBankAccountsHandler();
    getScheduledTransactionsHandler();
  }, []);

  const handleDropChange = (e) => {
    console.log(e.target.value);

    setDisplayScheduledTransactions([]);

    // loop through bankAccounts
    bankAccounts.forEach((account, index) => {
      if (account.AccountID === e.target.value) {
        //console.log(account);
        setSelectedAccount(account);
      }
    });
    scheduledTransactions.forEach((transaction, index) => {
      if (transaction.AccountID === e.target.value) {
        //console.log(transaction);
        //setScheduledTransactions(transaction);
        setDisplayScheduledTransactions([
          ...displayScheduledTransactions,
          transaction,
        ]);
      }
    });
  };

  return (
    <Container fluid="md">
      <Col>
        <Row>
          <Dropdown onChange={(e) => handleDropChange(e)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {bankAccounts.map((account) => {
                return (
                  <Dropdown.Item value={account.AccountID}>
                    {account.AccountID}
                  </Dropdown.Item>
                );
              })}
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
                    <Card.Title>
                      Account ID: {selectedAccount.AccountID}
                    </Card.Title>
                    <Card.Text>Type: {selectedAccount.AccountType}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Balance: {selectedAccount.Balance}
                  </Card.Footer>
                </>
              ) : (
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
        <Row></Row>
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
                {displayScheduledTransactions.map((transaction) => {
                  if (transaction.AccountID === selectedAccount.AccountID) {
                    return (
                      <tr key={transaction.TransactionID}>
                        <td>{transaction.TransactionID}</td>
                        <td>{transaction.AccountID}</td>
                        <td>{transaction.ReceivingAccountID}</td>
                        <td>{transaction.Date}</td>
                        <td>{transaction.TransactionAmount}</td>
                        <td>{transaction.Comment}</td>
                        <td>
                          <Button variant="danger">Delete</Button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>

            <div className="d-flex justify-content-end">
              <Button
                className="add-button"
                variant="success"
                size="md"
                onClick={handleShow}
              >
                Add New Transaction
              </Button>
              <AddModal show={show} handleClose={handleClose} />
            </div>
          </Container>
        </Row>
        <Row></Row>
      </Col>
    </Container>
  );
};

export default Dashboard;
