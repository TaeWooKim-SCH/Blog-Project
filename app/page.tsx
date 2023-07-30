import style from './page.module.css';
import Card from './_components/Card';
import { CardType } from './data/dummyData';

async function getData() {
    const res = await fetch('http://localhost:3000/api/content/list');
    const data = await res.json();
    return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <section className={style.home}>
      <div className={style.homeTitle}>D E V. L o g</div>
      <section className={style.contentList}>
        {data.length &&
          data.map((card: CardType) => <Card key={card._id} data={card} />)
          
        }
      </section>
    </section>
  )
}

