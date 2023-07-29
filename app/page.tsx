"use client"

import { useEffect, useState } from 'react';
import style from './page.module.css';
import Card from './_components/Card';
import { CardType } from './data/dummyData';

export default function Home() {
  const [data, setData] = useState<[]>([]);

  const dataFetch = async () => {
    const res = await fetch('/api/content/list')
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    dataFetch();
  }, [])

  return (
    <section className={style.home}>
      <div className={style.homeTitle}>D E V. L o g</div>
      <section className={style.contentList}>
        {data.length ?
          data.map((card: CardType) => <Card key={card._id} data={card} />) :
          <div>로딩중입니다...</div>
        }
      </section>
    </section>
  )
}
