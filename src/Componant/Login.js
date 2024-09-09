import React, { useState } from "react";
// import img1 from "../image/background img.jpg";
import { Container, Form, Row, Col } from "react-bootstrap";
import "../style/Login.css";
import { login } from "../reduxwork/UserSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const dispatcher = useDispatch([]);

  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = () => {
    const userData = {
      CustomerEmail: emailid,
      CustomerPassword: password,
    };
    console.log(userData);
    axios
      .post("http://localhost:5000/api/dologin", userData)
      .then((result) => {
        dispatcher(login(result.data.data));
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-1">
      <Form className="login" onSubmit={(e) => e.preventDefault()}>
        <h4 style={{ textAlign: "center" }}>Login</h4>
        <Form.Group>
          <Form.Label className="form-label">Email Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Customer Email "
            onChange={(e) => setEmailId(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Customer Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button
          className="btn1"
          onClick={doLogin}
          // onClick={() => addCustomers()}
        >
          Login
        </button>
      </Form>

      {/* <div className="Login-form-Container"> */}
      {/* <img className='image-Container-img' src={img1} /> */}
      {/* </div> */}
      {/* <Row>
                    <Col><h3>{emailid}</h3></Col>
                    <Col><h3>{password}</h3></Col>
                </Row> */}
    </div>
  );
};

export default Login;
