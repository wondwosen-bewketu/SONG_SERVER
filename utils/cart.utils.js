const Cart = require("../models/cart.model");

const generateOrderID = async () => {
  let orderID;
  let unique = false;
  while (!unique) {
    orderID = Math.floor(10000000 + Math.random() * 90000000);
    unique = await isOrderIDUnique(orderID);
  }
  return orderID;
};

const isOrderIDUnique = async (orderID) => {
  const existingCart = await Cart.findOne({ orderID });
  return !existingCart;
};

const calculateTotalPrice = (productPrice, quantity) => {
  const itemPrice = productPrice * quantity;
  const tax = 0.15 * itemPrice; // Assuming tax rate is 15%
  const serviceCharge = 0.1 * itemPrice; // Assuming service charge is 10%
  
  return { itemPrice, tax, serviceCharge };
};

module.exports = {
  generateOrderID,
  isOrderIDUnique,
  calculateTotalPrice,
};
