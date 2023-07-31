import style from './page.module.css';
import Card from './_components/Card';

async function getData() {
    const res = await fetch('http://localhost:3000/api/content/list');
    return res.json();
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

interface CardType {
  _id: string;
  img: string;
  category: string;
  title: string;
  createdAt: string;
  views: number;
  answerCount: number;
  likes: number;
}