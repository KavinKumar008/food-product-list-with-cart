import baklava from "../assets/image-baklava-desktop.jpg";
import brownie from "../assets/image-brownie-desktop.jpg";
import cake from "../assets/image-cake-desktop.jpg";
import creme from "../assets/image-creme-brulee-desktop.jpg";
import macaron from "../assets/image-macaron-desktop.jpg";
import meringue from "../assets/image-meringue-desktop.jpg";
import panna from "../assets/image-panna-cotta-desktop.jpg";
import tiramisu from "../assets/image-tiramisu-desktop.jpg";
import waffle from "../assets/image-waffle-desktop.jpg";
import AddToCart from "../cart/AddToCart";

export const dessertsImage = [
  {
    image: waffle,
    cart: <AddToCart />,
    fname: "Waffle",
    ingredients: "Waffle with Berries",
    cost: "$6.50",
    total: "10",
  },
  {
    image: creme,
    cart: <AddToCart />,
    fname: "Creme Brulee",
    ingredients: "Vannila Bean Creme Brulee",
    cost: "$7.00",
    total: "10",
  },
  {
    image: macaron,
    cart: <AddToCart />,
    fname: "Macaron",
    ingredients: "Macaron Mix of Five",
    cost: "$8.00",
    total: "10",
  },
  {
    image: tiramisu,
    cart: <AddToCart />,
    fname: "Tiramisu",
    ingredients: "Classic Tiramisu",
    cost: "$5.50",
    total: "10",
  },
  {
    image: baklava,
    cart: <AddToCart />,
    fname: "Baklava",
    ingredients: "Pistachio Baklava",
    cost: "$4.00",
    total: "10",
  },
  {
    image: meringue,
    cart: <AddToCart />,
    fname: "Pie",
    ingredients: "Lemon Meringue Pie",
    cost: "$5.00",
    total: "10",
  },
  {
    image: cake,
    cart: <AddToCart />,
    fname: "Cake",
    ingredients: "Red Velvet Cake",
    cost: "$4.50",
    total: "10",
  },
  {
    image: brownie,
    cart: <AddToCart />,
    fname: "Brownie",
    ingredients: "Salted Caramel Brownie",
    cost: "$5.50",
    total: "10",
  },
  {
    image: panna,
    cart: <AddToCart />,
    fname: "Panna Cotta",
    ingredients: "Vannila Panna Cotta",
    cost: "$6.50",
    total: "10",
  },
];
