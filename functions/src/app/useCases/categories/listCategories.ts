/* eslint-disable quotes */
import { Request, Response } from "express";
import * as admin from 'firebase-admin';

export async function listCategories(req: Request, res: Response) {
  try {
    const db = admin.firestore();
    const categoriesCollection = db.collection('categories');
    const snapshot = await categoriesCollection.get();

    const categories: any[] = [];
    snapshot.forEach((doc) => {
      categories.push({
        _id: doc.id,
        ...doc.data(),
      });
    });

    res.json(categories);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}