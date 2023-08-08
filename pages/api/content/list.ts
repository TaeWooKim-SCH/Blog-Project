import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { Db } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ): Promise<void> {
  const db: Db = await connectDB();
  if (req.query.category !== 'All') {
    const result: object | null = await db.collection('contents').find(req.query).toArray();
    if (!result) return res.status(200).json([]);
    return res.status(200).json(result);
  }
  const result: object = await db.collection('contents').find().toArray();
  return res.status(200).json(result);
}
