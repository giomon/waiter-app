/* eslint-disable quotes */
import { Product } from "./../../models/Product";
/* eslint-disable quotes */
import { Request, Response } from "express";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.log(error);
  }
}
