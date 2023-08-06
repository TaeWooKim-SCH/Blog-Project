'use client'

import { useSearchParams } from 'next/navigation';
import style from './page.module.css';
import CardListSSR from './_components/CardListSSR';

export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const searchParams = useSearchParams();
  const CATEGORY_LIST_URL=`${API_URL}/api/content/list?category=${
    searchParams?.get('category') ? searchParams.get('category') : 'All'
  }`

  return (
    <section className={style.home}>
      <div className={style.homeTitle}>D E V. L o g</div>
      <CardListSSR CATEGORY_LIST_URL={CATEGORY_LIST_URL} />
    </section>
  )
}
