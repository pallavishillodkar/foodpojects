import React, { useState } from "react";
import "../style/Registerd.css";
// import img1 from "../image/imagenew.jpeg";
import { Container, Row, Form, Button, Col, Image } from "react-bootstrap";
import axios from "axios";

const Registered = () => {
  const [foods, setfoods] = useState([]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const Registered = () => {
    const addCustomer = {
      CustomerName: name,
      CustomerAddress: address,
      CustomerMoNo: mobilenumber,
      CustomerEmail: emailid,
      CustomerPassword: password,
      CustomerCity: city,
      CustomerPincode: pincode,
    };
    axios
      .post("http://localhost:5000/api/addcustomer", addCustomer)
      .then((result) => {
        setfoods(result.data);
        alert("Food Added..");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="main-container">
      <Container fluid className="Registerd-Container input">
       
          <Form className="RegisterdForm">
            <h3>Register</h3>
            <Row>
              <Col>
                <Form.Group className="group">
                  <Form.Label className="label">Name</Form.Label>
                  <Form.Control
                    type="customer Name"
                    placeholder="Enter customer name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="group">
                  <Form.Label  className="label">Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="group">
                  <Form.Label  className="label">MobileNumber</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Number"
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="group">
                  <Form.Label  className="label">EmailId</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="group">
              <Form.Label  className="label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="group">
                  <Form.Label  className="label">City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="group">
                  <Form.Label  className="label">Pincode</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Pincode"
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="btnbox">
              <button className="btn1" onClick={() => Registered()}>
                Submit
              </button>
              {/* <button className="btn1">Cancel</button> */}
            </div>
          </Form>
        
        <div className="Registerd-form-Container">
          {/* <Image className='image-Container-img'src={img1}></Image> */}
        </div>
      </Container>
    </div>
  );
};

export default Registered;