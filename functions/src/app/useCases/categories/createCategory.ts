/* eslint-disable quotes */
import { Request, Response } from "express";
import * as admin from 'firebase-admin';

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    const db = admin.firestore();
    const categoriesCollection = db.collection('categories');

    const categoryData = { icon, name };
    const docRef = await categoriesCollection.add(categoryData);
    const snapshot = await docRef.get();
    const category = {
      _id: docRef.id,
      ...snapshot.data(),
    };

    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server error",
    });
  }
}