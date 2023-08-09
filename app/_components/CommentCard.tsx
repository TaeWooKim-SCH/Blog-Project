import { CommentType } from "./Comment";
import style from '../_styles/Comment.module.css';

export default function CommentCard({ data }: PropsType) {
  return (
    <section className={style.commentCardContainer}>
      <div className={style.author}>{data.author}</div>
      <div className={style.createdAt}>{data.createdAt}</div>
      <div>{data.content}</div>
    </section>
  );
}

interface PropsType {
  data: CommentType
}