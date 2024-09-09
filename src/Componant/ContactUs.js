import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../style/ContactUs.css";
import axios from "axios";

const ContactUs = () => {
  const [foods, setfoods] = useState([]);

  const [name, setName] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [emailid, setEmailId] = useState("");

  const Submit = () => {
    const contactData = {
      CustomerName: name,
      CustomerMobileNo: mobileno,
      CustomerEmailId: emailid,
    };
    console.log(contactData);
    axios
      .post("http://localhost:5000/api/addcontact", contactData)
      .then((result) => {
        console.log("DATA", result.data.data);
        console.log(result.data.message);
        
           alert ("submit Successful")
        
      })
      .catch((err) => {
        console.log(err);
        alert("An error");
      });
  };

  return (
    <div className="main1">
      {/* <Container> */}
      {/* <div className="image-container"></div> */}

      <div className="class">
        <Form className="form">
          <h1> Contact Us</h1>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="customer Name"
              placeholder="Enter customer name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>EmailId</Form.Label>
            <Form.Control
              type="Customer Name"
              placeholder="Enter customer emailid"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>MobileNo</Form.Label>
            <Form.Control
              type="Customer Mobile.No"
              placeholder="Enter customer Mobile.No"
            />
          </Form.Group>

          <Form.Group>
            Message
            <Form.Control type="msg" placeholder="Enter msg" />
          </Form.Group>

          <div>
            <Button onClick={() => Submit()}>Submit</Button>
            {/* <button className="btn1">Cancel</button> */}
          </div>
        </Form>
      </div>
      {/* </Container>  */}
    </div>
  );
};

export default ContactUs;
