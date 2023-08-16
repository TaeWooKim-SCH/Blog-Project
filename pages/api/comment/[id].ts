import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { Db, ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db: Db = await connectDB();
  const contentId = req.query.id;
  switch (req.method) {
    case 'POST':
      const bodyData = JSON.parse(req.body);
      if (typeof(contentId) === 'string') {
        const createdAt = new Date().toLocaleString('ko-KR').substring(0, 20);
        const postData = {
          ...bodyData,
          contentId: new ObjectId(contentId),
          createdAt
        }
        const result = await db.collection('comment').insertOne(postData);
        return res.status(200).json(postData);
      }
    case 'GET':
      if (typeof(contentId) === 'string') {
        const result = await db.collection('comment').find({
          contentId: new ObjectId(contentId)
        }).toArray();
        return res.status(200).json(result);
      }
  }
}
