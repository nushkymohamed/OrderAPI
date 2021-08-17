const Order = require('../model/order.model');

//Create an order
const createOrder = async (req, res) => {
  if (req.body) {
    const order = new Order(req.body);
    await order.save()
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }
}

//Get all orders
const getAllOrders = async (req, res) => {
  await Order.find({})
  .then(data => {                                                         
    res.status(200).send({ data: data });
  })
  .catch(error => {
    res.status(500).send({ error: error.message });
  });
}

module.exports = {
    createOrder,
    getAllOrders
};