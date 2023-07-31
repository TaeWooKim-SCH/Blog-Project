import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { ObjectId, Db } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ): Promise<void> {
    console.log(req.body);
    const bodyData = JSON.parse(req.body);
    const db: Db = await connectDB();
    const date = new Date().toISOString().substring(0, 10);
    const today = date.split('-').join('/');
    const data = {
      ...bodyData,
      likes: 0,
      views: 0,
      answerCount: 0,
      createdAt: today
    }
    const result: object = await db.collection('contents').insertOne(data);
    res.status(200).json(result);
  // const db: Db = await connectDB();
  // const result: object = await db.collection('contents').find().toArray();
  // res.json(result);
}
