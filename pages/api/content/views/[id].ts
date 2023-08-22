import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { ObjectId, Db } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const db: Db = await connectDB();
  const { id } = req.query;
  const maxAge = 60 * 60 * 24;
  const cookieParse: string[] = JSON.parse(req.cookies['saw-content-list'] || '[]');
  const cookieFilter = cookieParse.filter((contentId: string) => contentId === id);

  if (typeof(id) === 'string') {
    if (!cookieFilter.length) {
      const result = await db.collection('contents').findOne({ _id: new ObjectId(id) });
      result && await db.collection('contents').updateOne(
        { _id: new ObjectId(id) },
        { $set: { views: result.views + 1 } }
      );
      const cookieValue = [...cookieParse, id];
      const cookieSetting = `saw-content-list=${JSON.stringify(cookieValue)};HttpOnly;Path=/;Max-Age=${maxAge}`;
      res.setHeader('Set-Cookie', cookieSetting);
      return res.status(200).json('조회수 추가 완료.');
    }
    else {
      return res.status(200).json('이미 조회한 글입니다.');
    }
  }

  else {
    return res.status(400).json('비정상적인 접근입니다.');
  }
}