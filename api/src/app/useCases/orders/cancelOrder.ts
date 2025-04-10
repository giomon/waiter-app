/* eslint-disable quotes */
import { Request, Response } from "express";
import * as admin from 'firebase-admin';

export async function cancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    const db = admin.firestore();
    const ordersCollection = db.collection('orders');
    const orderRef = ordersCollection.doc(orderId);

    await orderRef.delete();

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
