  /* eslint-disable quotes */
  import { Request, Response } from "express";
  import * as admin from 'firebase-admin';

  export async function listProductsByCategory(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;
  
      const db = admin.firestore();
      const productsCollection = db.collection('products');
      const snapshot = await productsCollection.where('category', '==', categoryId).get();
  
      const products: any[] = [];
      snapshot.forEach((doc) => {
        products.push({
          _id: doc.id,
          ...doc.data(),
        });
      });
  
      res.json(products);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
