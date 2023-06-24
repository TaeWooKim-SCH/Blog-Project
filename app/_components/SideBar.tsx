"use client"

import Image from 'next/image';
import style from '../_styles/SideBar.module.css';

function SideBar() {
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
      </div>
      <div className={style.container}>
        <div className={style.category}>전체글보기</div>
        <div className={style.category}>JavaScript</div>
        <div className={style.category}>TypeScript</div>
        <div className={style.category}>React.js</div>
        <div className={style.category}>Next.js</div>
      </div>
    </section>
  )
}

export default SideBar;
