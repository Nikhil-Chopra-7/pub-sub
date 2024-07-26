import { pubSub } from "./pubSub.js";

export const addToCart = () => {
  const addItem = document.querySelector("#add-items input");
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", () => {
    pubSub.publish("addItems", addItem.value);
  });
};
