"use client"

import dynamic from 'next/dynamic';
import style from '../_styles/Post.module.css';

const MdEditor = dynamic(() => import('../_components/MdEditor'), { ssr: false });
const MdEdi = dynamic(() => import('../_components/MdEdi'), { ssr: false });

export default function Post() {

  return (
    <section className={style.postSection}>
      <MdEdi />
    </section>
  );
}