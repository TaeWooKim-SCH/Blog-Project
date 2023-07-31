import style from '../../_styles/PostDetail.module.css';
import MDEditorPreview from '@/app/_components/MDEditorPreview';

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/content/${id}`);
  return res.json();
}

export default async function Detail({ params }: any) {
  const { id } = params;
  const data: contentDetailType = await getData(id);
  console.log(data);

  return (
    <main className={style.detailContainer}>
      <h1>{data.title}</h1>
      {/* <MDEditorPreview content={data.content} /> */}
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