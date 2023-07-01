"use client"

import dynamic from 'next/dynamic';
import style from '../_styles/Post.module.css';

const MdEdit = dynamic(() => import('../_components/MdEdit'), { ssr: false });

export default function Post() {

  return (
    <section className={style.postSection}>
      <MdEdit />
    </section>
  );
}