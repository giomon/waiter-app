/* eslint-disable quotes */
import { Request, Response } from 'express';
import * as admin from 'firebase-admin'; // Import Firebase Admin SDK

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const db = admin.firestore(); // Get Firestore database instance
    const ordersCollection = db.collection('orders'); // Access 'orders' collection

    const orderData = { table, products };
    const docRef = await ordersCollection.add(orderData);
    const snapshot = await docRef.get();
    const order = { _id: docRef.id, ...snapshot.data() };

    res.status(201).json(order); // Return created order with ID
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}