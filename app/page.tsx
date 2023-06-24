"use client"

import style from './page.module.css';
import Card from './_components/Card';
import { cardData } from './data/dummyData';

export default function Home() {
  return (
    <section className={style.home}>
      <div className={style.homeTitle}>D E V. L o g</div>
      <section className={style.contentList}>
        {cardData.map((card) => <Card key={card.id} data={card} />)}
      </section>
    </section>
  )
}
