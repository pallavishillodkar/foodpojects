import React from 'react';
// import "../css/Card.css";
import { Butoon, Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateTotal,
  decrementQuantity,
  incrementQuantity,
} from "../reduxwork/CartSlice";
import axios from 'axios';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import "../style/card.css"


const Cart = () => {
  const { CartItems, CartTotalAmount } = useSelector((state) => state.cart);
  const { UserData } = useSelector((state) => state.user);

  const dispatcher = useDispatch();

  dispatcher(calculateTotal());

  // create place order function
  const placeOrder = async () => {
    let finalFoodItems = [];
    CartItems.map((food) => {
      finalFoodItems.push({ Qty: food.quantity, FoodId: food._id });
    });

    const orderData = {
      CustId: UserData._id,
      OrderTotalAmount: CartTotalAmount,
      FoodItems: finalFoodItems,
    };

    try {
      const result = await axios.post(
        "http://localhost:5000/api/addorder",
        orderData
      );
      console.log(result);
      alert("Order Added");
    } catch (error) {}
  };
  return(
    <div className='cart'>
     <Row>
     {CartItems.map((food) => {
      const foodid = food._id;
      return(
        <Col sm={12} md={8} lg={4}>
          <Card>
            <Card.Img
            src={`http://localhost:5000${food.FoodImage}`}
            />
            <Card.Body>
              <div>
              <Card.Text>{food.FoodName}</Card.Text>
              <div>
                <Card.Subtitle >
                  < LiaRupeeSignSolid/> {food.FoodPrice}
                </Card.Subtitle>
              </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <Button
               onClick={() => {
                dispatcher(decrementQuantity({ foodid }));
               }}
               >
                -
               </Button>
               <span>{food.quantity}</span>
               <Button
                // className='card-btn'
                onClick={() => {
                  dispatcher(incrementQuantity({ foodid}));
                }}
               >
                +
               </Button>
            </Card.Footer>
          </Card>
        </Col>
      );
      })}
     </Row>
     <Row>
      <Col>
      <h4> Total Price: {CartTotalAmount}</h4>
      </Col>
      <Col>
       <Button onClick ={() => placeOrder()}>placeOrder</Button>
      </Col>
     </Row>
    </div>
    );
};

export default Cart;