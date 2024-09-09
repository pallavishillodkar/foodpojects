import axios from "axios";
import React, { useEffect , useState } from "react";
import { useLocation } from "react-router-dom"

const OrderDetails = () => {
    // use Location
    const orderData = useLocation().state;
    const [order, setorder] = useState ([]);

    // use Effect
    useEffect (() => {
        axios
        .post("http://localhost:5000/api/orderbyid",{
            orderid: orderData._id,
        })
        .then((result) => {
            setorder(result.data);
            console.log("order",result);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);
    return(
        <div>
            <h2>OrderDetails</h2>
            <p>{orderData._id}</p>
            <div>
                <h4>Date:{order.OrderDate}</h4>
                <h4>Status:{order.OrderStatus}</h4>
                <h4>Total:{order.OrderTotalAmount}</h4>
            </div>
        </div>
    );
};

export default OrderDetails;