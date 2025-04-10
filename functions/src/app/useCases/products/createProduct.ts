/* eslint-disable quotes */
import { Request, Response } from "express";
import * as admin from 'firebase-admin';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const db = admin.firestore();
    const productsCollection = db.collection('products');

    const productData = {
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    };
    const docRef = await productsCollection.add(productData);
    const snapshot = await docRef.get();
    const product = {
      _id: docRef.id,
      ...snapshot.data(),
    };

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}