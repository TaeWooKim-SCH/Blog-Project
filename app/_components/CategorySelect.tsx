'use client'

import style from '../_styles/Post.module.css';

export default function CategorySelect({ register }: any) {

  return (
    <select className={style.categorySelectBox} {...register('category')}>
      <option>카테고리를 선택해주세요.</option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>React</option>
      <option>Next.js</option>
    </select>
  );
}
