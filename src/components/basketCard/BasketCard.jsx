import React, { useContext, useState } from "react";
import css from "./BasketCard.module.css";
import QuantityInput from "../quantityInput/QuantityInput";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DataContext } from "../../context/data_context";
import Swal from "sweetalert2";
import langCheck from "./language";
function BasketCard({ elem }) {
  const store = useContext(DataContext);
  const [quantity, setQuantity] = useState(1);
  let basketArr = JSON.parse(localStorage.getItem("basket"));
  function removeItem() {
    Swal.fire({
      title: langCheck.alert.areYouSure.title[store.lang.data],
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:
        langCheck.alert.areYouSure.confirmButtonText[store.lang.data],
    }).then((result) => {
      if (result.isConfirmed) {
        basketArr = basketArr.filter(
          (prod) => prod.product.id != elem.product.id
        );
        localStorage.setItem("basket", JSON.stringify(basketArr));
        store.basket.setData(basketArr);
        Swal.fire({
          title: langCheck.alert.deleted.title[store.lang.data],
          text: langCheck.alert.deleted.text[store.lang.data],
          icon: "success",
        });
      }
    });
  }
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
        <button className={css.remove_item} onClick={removeItem}>
          <DeleteOutlineIcon />
        </button>
      </div>
    </>
  );
}

export default BasketCard;
