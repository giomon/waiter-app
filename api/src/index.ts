/* eslint-disable quotes */
import path from "node:path";
import express from "express";
import * as admin from 'firebase-admin'; // Import Firebase Admin SDK

import { router } from "./router";

// Initialize Firebase Admin SDK with Application Default Credentials
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const app = express();
const port = 3001;

app.use(
  "/uploads",
  express.static(path.resolve(__dirname, "..", "uploads"))
);
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
