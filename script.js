const cartItems = document.getElementById("cartItems");
const jacket1 = document.querySelectorAll("#jacket1");

jacket1.addEventListener("click", function () {
  console.log("im here");
  cartItems.innerHTML += `
    <p>Burger - ₱120</p>
`;
  const del = document.createElement("button");
  del.value = "delete";
});

console.log(prod);
