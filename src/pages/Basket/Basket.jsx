import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../../components/Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";

export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Cart</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            Products page

          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="images/sound(1).jpg" alt="" />
              <span>
              Shipping is free for purchases over 100,000 Rupees. </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>Shopping cart total</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} Rupees</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>Discounted price</span>
                <span>{state.totalPriceAfterOffer.toLocaleString()} Rupees</span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span>Total amount payable</span>
              <span>{state.totalPriceFainal.toLocaleString()} Rupees</span>
            </div>
            <button className="basket_button_buy">Continue the purchase process</button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove" >
              Delete {state.basket.length} Goods from the shopping cart
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title"> The shopping cart is empty</span>
        </div>
      )}
    </>
  );
}
