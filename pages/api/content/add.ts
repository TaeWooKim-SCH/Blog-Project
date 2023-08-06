import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { Db } from 'mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ): Promise<void> {
    const bodyData = JSON.parse(req.body);
    const storeHash = '$2a$10$WoSmziAXa1czWdHljUrmd.KmALfdyU3nNkQBl.MhCxCOEBGGKBv2G';
    bcrypt.compare(bodyData.password, storeHash, (err, result) => {
      console.log(bodyData.password);
      console.log(result);
    })
    if (bodyData.password !== '$2a$10$0BJ8Z9Jd06Gpm0STTsVzMeNty6XY3CX0Qhuz/yzHH7t3gH5v48Q8e') {
      return res.status(400).send('비밀번호가 틀렸습니다.');
    }
    const db: Db = await connectDB();
    const date = new Date().toISOString().substring(0, 10);
    const today = date.split('-').join('/');
    const data = {
      ...bodyData.data,
      likes: 0,
      views: 0,
      answerCount: 0,
      createdAt: today
    }
    const result: object = await db.collection('contents').insertOne(data);
    return res.status(200).json(result);
}
