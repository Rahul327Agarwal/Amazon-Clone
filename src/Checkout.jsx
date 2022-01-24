import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal"

function Checkout() {
  const [{basket,user},dispatch] =useStateValue();
  return (
  <div className="checkout">
      {/* <h1>{user.email}</h1> */}
  <div className="checkout_left">
      <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Banner" />

      <h2 className="checkout_title">Your Shopping Basket</h2>
      {basket.map(item=>(
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
      )

      )}
      {/* {<BasketItem/>} */}
  </div>
  <div className="checkout_right">
      <h2>The Subtotal will go here</h2>
      <Subtotal/>
  </div>
  </div>);
}

export default Checkout;