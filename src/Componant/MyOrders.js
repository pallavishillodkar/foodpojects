import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../style/MyOrder.css";

function MyOrders() {
  const [AllOrders, setAllOrders] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allorders")
      .then((result) => {
        setAllOrders(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="main">
      <h2  style={{textAlign:"center"}}>MyOrders</h2>
      <Container>
        <Row className="text">
          {AllOrders.map((order) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="order">
                  <Card.Body className="cards">
                    <Card.Text>Date: {order.OrderDate}</Card.Text>
                    <Card.Text>Status: {order.OrderStatus}</Card.Text>
                    <Card.Text>
                      Total Amount: {order.OrderTotalAmount}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button className="myButton"
                      onClick={() =>
                        navigator("/OrderDetails", { state: order })
                      }
                    >
                      OrderDetails
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MyOrders;
