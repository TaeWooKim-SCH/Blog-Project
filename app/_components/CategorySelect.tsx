'use client'

import style from '../_styles/Post.module.css';

export default function CategorySelect({ register }: any) {
  const categoryList: string[] = ['카테고리를 선택해주세요.', 'JavaScript', 'TypeScript', 'React.js', 'Next.js']
  
  return (
    <select className={style.categorySelectBox} {...register('category')}>
      {categoryList.map((category: string) => <option key={category}>{category}</option>)}
    </select>
  );
}
