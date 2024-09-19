import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import "./Cart.css";
import { useCart } from "../Hooks/useCart";

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, cleanCart, removeFromCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="">
              <strong>Product:</strong> {item.title} <br />
              <strong>Price:</strong> ${item.price} <br />
              <strong>Quantity:</strong> {item.quantity}
              <button onClick={() => addToCart(item)}>+</button>
              <button onClick={() => removeFromCart(item)}>-</button>
            </li>
          ))}
        </ul>
        <button onClick={() => cleanCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
