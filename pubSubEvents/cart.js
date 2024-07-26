import { pubSub } from "./pubSub.js";

export const cartItems = () => {
  const cart = document.querySelector("#cart");

  pubSub.subscribe("addItems", (data) => {
    const li = document.createElement("li");
    li.innerText = data;
    cart.append(li);
  });
};
