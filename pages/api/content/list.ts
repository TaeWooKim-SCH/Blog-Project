import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { Db } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ): Promise<void> {
  const db: Db = await connectDB();
  if (req.query.category !== 'All') {
    const result: object | null = await db.collection('contents').findOne(req.query);
    if (!result) return res.status(200).json(result);
    return res.status(200).json([result]);
  }
  const result: object = await db.collection('contents').find().toArray();
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  return res.status(200).json(result);
}
