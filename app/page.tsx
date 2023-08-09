import style from './page.module.css';
import Card, { CardType } from './_components/Card';

export default async function Home({ searchParams }: propsType) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const CATEGORY_LIST_URL=`${API_URL}/api/content/list?category=${
    searchParams.category ? searchParams.category : 'All'
  }`
  const data = await getData(CATEGORY_LIST_URL);

  return (
    <section className={style.home}>
      <div className={style.homeTitle}>D E V. L o g</div>
      <section className={style.contentList}>
        {data.length ?
          data.map((card: CardType) => <Card key={card._id} data={card} />) :
          <h1>글 목록이 존재하지 않습니다.</h1>
        }
      </section>
    </section>
  )
}

async function getData(url: string) {
  try {
    const res = await fetch(url, {cache: 'no-store'});
    if (!res.ok) {
      throw new Error('Failed to fetch data!');
    }
    return res.json();
  }
  catch(err) {
    console.error(err);
  }
}

interface propsType {
  searchParams: { category: string | null };
}