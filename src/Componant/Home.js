import axios from "axios";
import "../style/Home.css";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addItem } from "../reduxwork/CartSlice";
import { LiaRupeeSignSolid } from "react-icons/lia";

function Home() {
  //AllDishes
  const [allfood, setallfood] = useState([]);

  // Add to cart
  const dispatcher = useDispatch();

  // AllDishes
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allfoods")
      .then((result) => {
        setallfood(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Container>
        <Row>
          {allfood.map((food)=>{
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="home-card">
                  <img
                    className="home-image"
                    src={`http://localhost:5000${food.FoodImage}`}
                  />
                  <Card.Body>
                    <h6 className="home-h6">{food.FoodName}</h6>
                    {/* <h6 className='home-h6'>{food.FoodPrice}</h6> */}

                    <div>
                      <Card.Subtitle className="home-h6">
                        <LiaRupeeSignSolid /> {food.FoodPrice}
                      </Card.Subtitle>
                    </div>
                    <Card.Footer>
                      <button
                        className="home-cart"
                        onClick={() => {
                          dispatcher(addItem(food));
                          alert("Added to Cart");
                        }}
                      >
                        Add to Cart
                      </button>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
