"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _PayPalCheckoutV2 = require('./app/controllers/paypal/PayPalCheckoutV2'); var _PayPalCheckoutV22 = _interopRequireDefault(_PayPalCheckoutV2);

const routes = _express.Router.call(void 0, );

routes.post("/create-order", _PayPalCheckoutV22.default.CreateOrder);

routes.post("/capture-order", _PayPalCheckoutV22.default.CaptureOrder);

routes.get("/goi", _PayPalCheckoutV22.default.GetOrderInfo);

exports. default = routes;
