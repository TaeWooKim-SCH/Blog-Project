import style from '../_styles/Comment.module.css';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

async function getData(id: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/comment/${id}`);
  return res.json()
}

export default async function Comment({ contentId }: PropsType) {
  const commentData: CommentType[] = await getData(contentId);

  return (
    <section className={style.commentContainer}>
      <div className={style.commentCount}>{commentData.length}개의 댓글</div>
      <CommentForm contentId={contentId} />
      {commentData.map((comment: CommentType) => <CommentCard data={comment} />)}
    </section>
  );
}

interface PropsType {
  contentId: string;
}

export interface CommentType {
  author: string;
  content: string;
  contentId: string;
  createdAt: string;
}