import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { ObjectId, Db } from "mongodb";
import cookie from 'cookie';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const db: Db = await connectDB();
  const cookies = cookie.parse(req.headers.cookie || '');
  console.log(cookies);
  
  const { id } = req.query;
  if (typeof(id) === 'string') {
    const result = await db.collection('contents').findOne({ _id: new ObjectId(id) });
    
    // if (!cookie.has('saw-content-list')) {
    //   cookie.set('saw-content-list', JSON.stringify([id]));
    // }
    // else {
    //   const cookieStore = cookie.get('saw-content-list');
    //   console.log(cookieStore);

    // }
    res.setHeader('Set-Cookie', cookie.serialize('saw-content-list', JSON.stringify([id]), {
      path: '/',
      httpOnly: true,
      maxAge: 60,
    }));
    return res.status(200).json(result);
  }
  return res.status(400).json('글 아이디가 들어오지 않았습니다.');
}