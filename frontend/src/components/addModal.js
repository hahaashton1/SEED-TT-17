import React, {useState} from "react";
import './Dashboard.css';
import { Modal,  Row, Button} from "react-bootstrap";

    const AddModal = (props) => {
        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }
      
        const handleSubmit = (event) => {
            event.preventDefault();
            alert("New Transaction Submitted!");
            // const newReceivingAccountID = inputs.receiving; 
            // const newDate = inputs.date; 
            // const newTransaction = inputs.amount; 
            // const newComment = inputs.comments; 

        }

    return (
        <Modal show={props.show} onHide={props.handleClose} style={{borderRadius: 0}}>
            <Modal.Header closeButton>
                <Modal.Title>Add Scheduled Transaction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                </Row>
                <form onSubmit={handleSubmit}>
                    <label>Account ID:</label> 
                        <input
                        type="text"
                        name="receiving"
                        value={inputs.receiving || ""} 
                        onChange={handleChange}
                        placeholder="621156213"
                        />
                    <br/>
                    <br/>
                    <label>Receiving Account ID:</label> 
                        <input
                        type="text"
                        name="receiving"
                        value={inputs.receiving || ""} 
                        onChange={handleChange}
                        placeholder="339657462"
                        />
                    <br/>
                    <br/>
                    <label>Scheduled Date:</label>
                        <input 
                        type="text" 
                        name="date" 
                        value={inputs.date || ""} 
                        onChange={handleChange}
                        placeholder="2022-12-03"
                        />
                    <br/>
                    <br/>
                    <label> Transaction Amount:</label>
                        <input 
                        type="number" 
                        name="amount" 
                        value={inputs.amount || ""} 
                        onChange={handleChange}
                        placeholder="30"
                        />
                    <br/>
                    <br/>
                    <label>Comments:
                        <input 
                        type="number" 
                        name="comments" 
                        value={inputs.comments || ""} 
                        onChange={handleChange}
                        placeholder="Spending"
                        />
                    </label>
                    <br/>
                    <br/>
                    <Button type="submit" className="add-button" variant="success">
                        Submit
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}


export default AddModal;
