import style from '../page.module.css';
import Card from './Card';
import { CardType } from './Card';

async function getData(url: string) {
    const res = await fetch(url);
    return res.json();
}

export default async function CardListSSR({ CATEGORY_LIST_URL }: propsType) {
  const data = await getData(CATEGORY_LIST_URL);

  if (!data) {
    return <h1>글 목록이 존재하지 않습니다.</h1>
  }

  return (
    <section className={style.contentList}>
      {data.length ?
        data.map((card: CardType) => <Card key={card._id} data={card} />) :
        <h1>글 목록이 존재하지 않습니다.</h1>
      }
    </section>
  )
}

interface propsType {
  CATEGORY_LIST_URL: string;
}