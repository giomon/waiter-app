/* eslint-disable quotes */
import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProducts";

export const router = Router();

const upload = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.resolve(__dirname));
  },
});

// List categories
router.get("/categories", (req, res) => listCategories);

// Create category
router.post("/categories", (req, res) => createCategory);

// List products
router.get("/products", (req, res) => listProducts);

// Create product
router.post("/products", (req, res) => createProduct);

// Get products by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("OK");
});

// List orders
router.get("/orders", (req, res) => {
  res.send("OK");
});

// Create order
router.post("/orders", (req, res) => {
  res.send("OK");
});

// Change order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("OK");
});

// Delete/cancer order
router.delete("/orders/:orderId", (req, res) => {
  res.send("OK");
});
