import Image from 'next/image';
import { BsEyeFill, BsHeartFill } from 'react-icons/bs';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';

import style from '../_styles/Card.module.css';

export default async function Card({ data }: PropsType) {

  return (
    <a href={`/post/${data._id}`} className={style.cardContainer}>
      <Image className={style.cardImg} src={data.img} width="0" height="0" alt="이미지"></Image>
      <section className={style.cardBottom}>
        <div className={style.cardTitle}>
          <span className={style.category}>[{data.category}]</span>
          <span className={style.title}> {data.title}</span>
        </div>
        <div className={style.date}>{data.createdAt}</div>
        <div className={style.counts}>
          <div className={style.countBox}>
            <BsEyeFill className={style.icon} />
            <div className={style.count}>{data.views}</div>
          </div>
          <div className={style.countBox}>
            <IoChatbubbleEllipsesSharp className={style.icon} />
            <div className={style.count}>{data.answerCount}</div>
          </div>
          <div className={style.countBox}>
            <BsHeartFill className={style.icon} />
            <div className={style.count}>{data.likes}</div>
          </div>
        </div>
      </section>
    </a>
  );
}

interface PropsType {
  data: CardType;
}

export interface CardType {
  _id: string;
  title: string;
  category: string;
  img: string;
  content: string;
  likes: number;
  views: number;
  answerCount: number;
  createdAt: string;
}