import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { Db } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const db: Db = await connectDB();

  if (req.query.category !== 'All') {
    const result: object | null = await db.collection('contents').find(req.query).toArray();
    if (!Array.isArray(result)) {
      return res.status(200).json([]);
    }
    else if (Array.isArray(result)) {
      const resData = await sortHandler(result, db);
      return res.status(200).json(resData);
    }
    else {
      return res.status(400).json('잘못된 요청입니다.');
    }
  }

  else {
    const result: object = await db.collection('contents').find().toArray();
    if (Array.isArray(result)) {
      const resData = await sortHandler(result, db);
      return res.status(200).json(resData);
    }
    else {
      return res.status(400).json('잘못된 요청입니다.')
    }
  }
}

const sortHandler = async (data: contentType[], db: Db) => {
  data.sort((a: contentType, b: contentType) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    if (dateA < dateB) {
      return 1;
    }
    else if (dateA > dateB) {
      return -1;
    }
    return 0;
  });

  for (let idx = 0; idx < data.length; idx++) {
    const commentList = await db.collection('comment').find({ contentId: data[idx]._id}).toArray();
    data[idx] = { ...data[idx], answerCount: commentList.length };
  }

  return data;
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