import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from "axios";

function ProfileSettings() {

  const [emailAddress, setEmailAddress] = useState();
  const [address, setAddress] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();


  const [emailAddressInput, setEmailAddressInput] = useState();
  const [addressInput, setAddressInput] = useState();
  const [firstnameInput, setFirstnameInput] = useState();
  const [lastnameInput, setLastnameInput] = useState();


  useEffect(() => {
    const user = localStorage.getItem('UserObject');
    setEmailAddress(user.Email);
    setAddress(user.Address);;
    setFirstname(user.Firstname);
    setLastname(user.Lastname);
  }, [emailAddress, address,firstname,lastname]);


  const submitEmail = (newEmail) => {

    axios.get("")
      .then((response) => {
        //console.log(response.data)
      })
  }

  const submitAddress = (newAddress) => {
      
      axios.get("")
        .then((response) => {
          //console.log(response.data)
        })
  }

  const handleEmail = (e) => {
    setEmailAddressInput(e.target.value);
  }

  const handleAddress = (e) => {
    setAddressInput(e.target.value);
  }


  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        
        <tr>
          <th colSpan={5}>Personal Details</th>
          <th> Update   </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>First Name</b></td>
          <td colSpan={4}>{firstname}</td>
          <td>  </td>
        </tr>
        <tr>
          <td><b>Last Name</b></td>
          <td colSpan={4}>{lastname}</td>
          
        </tr>
        <tr>
          <td><b>Email Address</b></td>
          <td colSpan={4}>{emailAddress}</td>
          <th> <Form.Control type="email" placeholder="Enter New Email" onChange={(e)=> handleEmail(e)}/></th>
          
        </tr>
        <tr>
          <td><b>Address</b></td>
          <td colSpan={4}> {address}</td>
          <th> <Form.Control type="email" placeholder="Enter New Address" onChange={(e)=> handleAddress(e)}/></th>
          
        </tr>
        
      </tbody>
      <Button variant="primary" onClick={()=>submitEmail}>Update Email</Button>
      <Button variant="primary" onClick={()=>submitAddress}>Update Address</Button>

    </Table>
    
    
  );
}

export default ProfileSettings;