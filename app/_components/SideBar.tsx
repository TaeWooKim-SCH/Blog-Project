"use client"

import Image from 'next/image';
import style from '../_styles/SideBar.module.css';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

function SideBar() {
  const categoryList = ['All', 'JavaScript', 'TypeScript', 'React.js', 'Next.js']
  return (
    <section className={style.sidebar}>
      <div className={style.imageContainer}>
        <Image className={style.topImg} src='/sidebar-top.jpg' width="250" height="140" alt="이미지" />
        <div className={style.shadow}></div>
      </div>
      <div className={style.profileBox}>
        <Image className={style.profile} src='/profile.jpg' width="100" height="100" alt="프로필 사진" />
        <div className={style.name}>Tae Woo</div>
        <div className={style.jobName}>Front-end</div>
        <a className={style.post} href="/post"><HiOutlinePencilSquare size="30" /></a>
      </div>
      <div className={style.container}>
        {categoryList.map((category: string) => (
          <a
            href={`/?category=${category}`}
            className={style.category}
            key={category}
          >{category}</a>
        ))}
      </div>
    </section>
  )
}

export default SideBar;
