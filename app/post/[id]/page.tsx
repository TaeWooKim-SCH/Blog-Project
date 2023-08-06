import style from '../../_styles/PostDetail.module.css';
import MDEditorPreview from '@/app/_components/MDEditorPreview';

async function getData(id: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/content/${id}`);
  return res.json();
}

export default async function Detail({ params }: any) {
  const { id } = params;
  const data: contentDetailType = await getData(id);

  return (
    <main className={style.detailContainer}>
      <section className={style.detailSection}>
        <h1 className={style.contentTitle}>{data.title}</h1>
        <MDEditorPreview content={data.content} />
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