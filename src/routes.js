import { Router } from "express";

import PayPalCheckoutV2 from "./app/controllers/paypal/PayPalCheckoutV2";

const routes = Router();

routes.post("/create-order", PayPalCheckoutV2.CreateOrder);

routes.post("/capture-order", PayPalCheckoutV2.CaptureOrder);

routes.get("/goi", PayPalCheckoutV2.GetOrderInfo);

export default routes;
