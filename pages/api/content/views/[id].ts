import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/app/_utill/database";
import { ObjectId, Db } from "mongodb";
import { setCookie } from 'cookies-next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  console.log(req.headers.cookie);
  console.log('요청 들어옴');
  const db: Db = await connectDB();
  const { id } = req.query;
  res.setHeader('Set-Cookie', 'saw=hi;HttpOnly;Path=/;Max-Age=60;');
  // setCookie('saw', 'hi', {
  //   req,
  //   res,
  //   httpOnly: true,
  //   path: '/',
  //   maxAge: 60
  // });
  res.status(200).json('몰라잉');
}