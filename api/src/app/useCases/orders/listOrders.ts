/* eslint-disable quotes */
import { Request, Response } from "express";
import * as admin from 'firebase-admin';

export async function listOrders(_req: Request, res: Response) {
  try {
    const db = admin.firestore();
    const ordersCollection = db.collection('orders');
    const snapshot = await ordersCollection.get();

    const orders: any[] = [];
    snapshot.forEach((doc) => {
      orders.push({
        _id: doc.id,
        ...doc.data(),
      });
    });

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
