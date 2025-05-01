import React, { useState } from "react";
import css from "./BasketCard.module.css";
import QuantityInput from "../quantityInput/QuantityInput";
function BasketCard({ elem }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className={css.product_card}>
        <div className={css.product_card_image_div}>
          <img src={elem.product.image_url} alt="" />
        </div>
        <p className={css.product_name}>{elem.product.title}</p>
        <p className={css.product_price}>${elem.product.price}</p>{" "}
        <QuantityInput
          quantity={elem.quantity}
          setQuantity={setQuantity}
          elem={elem}
          className={css.product_quantity}
        />
        <p className={css.product_total}>
          TOTAL: ${(elem.product.price * elem.quantity).toFixed(2)}
        </p>
      </div>
    </>
  );
}

export default BasketCard;
