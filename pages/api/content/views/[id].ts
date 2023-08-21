import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { ObjectId, Db } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const db: Db = await connectDB();
  const { id } = req.query;
  const cookieValue = [id];
  const cookieParse = JSON.parse(req.cookies['saw-content-list'] || '[]');
  console.log(cookieParse);
  res.setHeader('Set-Cookie', `saw-content-list=${JSON.stringify(cookieValue)};HttpOnly;Path=/;Max-Age=60;`);
  res.status(200).json('쿠키 저장');
}