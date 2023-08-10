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

    Array.isArray(result) && result.sort((a: contentType, b: contentType) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      if (dateA < dateB) {
        return 1;
      }
      else if (dateA > dateB) {
        return -1;
      }
      return 0;
    })
    
    return res.status(200).json(result);
  }

  const result: object = await db.collection('contents').find().toArray();

  Array.isArray(result) && result.sort((a: contentType, b: contentType) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    if (dateA < dateB) {
      return 1;
    }
    else if (dateA > dateB) {
      return -1;
    }
    return 0;
  })

  return res.status(200).json(result);
}

interface contentType {
  _id: string;
  title: string;
  category: string;
  content: string;
  img: string;
  likes: number;
  views: number;
  answerCount: number;
  createdAt: string;
}