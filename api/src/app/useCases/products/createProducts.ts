/* eslint-disable quotes */
import { Product } from "./../../models/Product";
import { Request, Response } from "express";

export async function createProduct(req: Request, res: Response) {
  try {
    console.log("");
  } catch (error) {
    res.status(500).json({
      error: "Internal Server error",
    });
  }
}
