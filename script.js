// create variable
const cartItems = document.getElementById("cartItems");
const addtocart = document.querySelectorAll(".add-to-cart");
const pricing = document.getElementById("price");

console.log(addtocart);

// create function
addtocart.forEach((Button) => {
  Button.addEventListener("click", function (tag) {
    const pricetag = tag.target.dataset.price;
    const item = document.createElement("li");
    item.textContent = `price ${pricetag}`;
    cartItems.appendChild(item);
    console.log(cartItems);
  });
});
console.log(addtocart);
