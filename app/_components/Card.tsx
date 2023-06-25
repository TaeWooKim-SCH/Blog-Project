"use client"

import Image from 'next/image';
import { BsEyeFill, BsHeartFill } from 'react-icons/bs';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import Link from 'next/link';

import style from '../_styles/Card.module.css';
import { CardType } from '../data/dummyData';

export default function Card({ data }: PropsType) {

  return (
    <section className={style.cardSection}>
      <Image className={style.cardImg} src={data.img} width="0" height="0" alt="이미지"></Image>
      <section className={style.cardBottom}>
        <Link href={`/post/${data._id}`} className={style.titleBox}>
          <span className={style.category}>[{data.category}]</span>
          <span className={style.title}> {data.title}</span>
        </Link>
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
    </section>
  );
}

interface PropsType {
  data: CardType;
}