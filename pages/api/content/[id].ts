import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { ObjectId, Db } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const db: Db = await connectDB();
  const { id } = req.query;
  
  if (typeof(id) === 'string') {
    const result = await db.collection('contents').findOne({ _id: new ObjectId(id) });
    const commentList = await db.collection('comment').find({ contentId: new ObjectId(id)}).toArray();
    const data = {...result, answerCount: commentList.length};
    return res.status(200).json(data);
  }
  return res.status(400).json('글 아이디가 들어오지 않았습니다.');
}
