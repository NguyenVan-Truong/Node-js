import express, { Router } from "express";
import {
  addProducts,
  deleteProducts,
  getProductById,
  getProducts,
  updateProducts,
} from "../controller/product";

const route = express.Router();
//router
route.get("/books", getProducts);
route.get("/books/:id", getProductById);
route.post("/books", addProducts);
route.put("/books/:id", updateProducts);

route.delete("/books/:id", deleteProducts);
export default route;
