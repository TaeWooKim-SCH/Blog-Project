import Comment from '@/app/_components/Comment';
import style from '../../_styles/PostDetail.module.css';
import MDEditorPreview from '@/app/_components/MDEditorPreview';

import { BsEyeFill, BsHeartFill } from 'react-icons/bs';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';

async function getData(id: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${API_URL}/api/content/${id}`, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-store'
    });
    return res.json();
  }
  catch(err) {
    console.error(err);
  }
}

export default async function Detail({ params }: PropsType) {
  const { id } = params;
  const data: contentDetailType = await getData(id);

  return (
    <main className={style.detailContainer}>
      <section className={style.detailSection}>
        <h1 className={style.contentTitle}>{data.title}</h1>
        <section className={style.countSection}>
          <div className={style.createdAt}>{data.createdAt}</div>
          <div className={style.countBox}>
            <BsEyeFill className={style.icon} />
            <div className={style.count}>{data.views}</div>
          </div>
          <div className={style.countBox}>
            <BsHeartFill className={style.icon} />
            <div className={style.count}>{data.likes}</div>
          </div>
          <div className={style.countBox}>
            <IoChatbubbleEllipsesSharp className={style.icon} />
            <div className={style.count}>{data.answerCount}</div>
          </div>
        </section>
        <div className={style.tag}># {data.category}</div>
        <MDEditorPreview content={data.content} id={id} />
        <Comment contentId={id} />
      </section>
    </main>
  );
}

interface contentDetailType {
  _id: string;
  title: string;
  category: string;
  content: string;
  img: string;
  likes: number;
  views: number;
  answerCount: number;
  createdAt: string;
}

interface PropsType {
  params: { id: string };
}