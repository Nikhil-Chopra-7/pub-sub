import { pubSub } from "./pubSub.js";

export const countItems = () => {
  const count = document.querySelector("#count");
  const p = document.createElement("p");
  count.appendChild(p);
  const cart = document.querySelector("#cart");
  const cartItems = cart.getElementsByTagName("li");
  const btn = document.querySelector("#unsub");

  const countEl = () => {
    console.log(pubSub);
    p.innerText = cartItems.length;
  };

  pubSub.subscribe("addItems", countEl);

  btn.addEventListener("click", () => pubSub.unsubscribe("addItems", countEl));
};
