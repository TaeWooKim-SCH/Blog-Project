import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { ObjectId, Db } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  console.log(req.headers.cookie);
  const db: Db = await connectDB();
  const { id } = req.query;
  
  if (typeof(id) === 'string') {
    const result = await db.collection('contents').findOne({ _id: new ObjectId(id) });
    res.setHeader('Set-Cookie', 'saw=hi; HttpOnly; Path=/; Max-Age=3600;');
    return res.status(200).json(result);
  }
  return res.status(400).json('글 아이디가 들어오지 않았습니다.');
}