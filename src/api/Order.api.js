const express = require('express');
const router = express.Router();
const controller = require('../controllers/order.controller');

module.exports = function () {
  router.post('/create', controller.createOrder);
  router.get('/', controller.getAllOrders);

  return router;
}