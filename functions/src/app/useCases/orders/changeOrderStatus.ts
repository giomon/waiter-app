/* eslint-disable quotes */
import { Request, Response } from "express";
import * as admin from 'firebase-admin';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      return res.status(400).json({
        error: "Status should be one of these: WAITING, IN_PRODUCTION, DONE",
      });
    }

    const db = admin.firestore();
    const ordersCollection = db.collection('orders');
    const orderRef = ordersCollection.doc(orderId);

    await orderRef.update({ status });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}