'use client'

import { useForm } from 'react-hook-form';
import style from '../_styles/Comment.module.css';

export default function CommentForm({ contentId }: PropsType) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { register, handleSubmit, watch } = useForm<FormDataType>();

  const customSubmitHandler = async (data: FormDataType) => {
    if (!watch('author')) return ('이름을 입력해주세요.');
    else if (!watch('content')) return ('내용을 입력해주세요.');
    try {
      const res = await fetch(`${API_URL}/api/comment/${contentId}`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      if (res.ok) {
        alert('댓글이 등록되었습니다.');
        return window.location.reload();
      }
      else {
        return alert('댓글 등록에 실패했습니다.');
      }
    }
    catch(err) {
      console.error(err);
    }
  };

  return (
    <form className={style.commentForm} onSubmit={handleSubmit(customSubmitHandler)}>
      <input
        className={style.commentAutor}
        type="text"
        placeholder='이름을 입력하세요'
        {...register('author')}
      />
      <textarea
        className={style.commentDetail}
        placeholder='댓글을 입력하세요'
        wrap='hard'
        {...register('content')}
      />
      <button className={style.commentBtn}>댓글 작성</button>
    </form>
  );
}

interface FormDataType {
  author: string;
  content: string;
}

interface PropsType {
  contentId: string;
}