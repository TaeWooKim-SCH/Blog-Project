import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { ObjectId, Db } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ): Promise<void> {
  const db: Db = await connectDB();
  const result: object = await db.collection('contents').find().toArray();
  res.json(result);
}
