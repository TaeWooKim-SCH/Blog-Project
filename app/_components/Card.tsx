"use client"

import Image from 'next/image';

import style from '../_styles/Card.module.css';
import { cardData, CardType } from '../data/dummyData';

export default function Card({ data }: PropsType) {
  console.log(cardData);
  return (
    <section className={style.cardSection}>
      <Image className={style.cardImg} src={data.img} width="0" height="0" alt="이미지"></Image>
      <section className={style.cardBottom}>
        <div className={style.titleBox}>
          <span className={style.category}>[{data.category}]</span>
          <span className={style.title}> {data.title}</span>
        </div>
        <div className={style.date}>{data.createdAt}</div>
        <div className={style.counts}>
          <div>{data.views}</div>
          <div>{data.answerCount}</div>
          <div>{data.likes}</div>
        </div>
      </section>
    </section>
  );
}

interface PropsType {
  data: CardType;
}