"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import style from '../_styles/Post.module.css';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

type FormDataType = {
  title: string;
  content: string;
};

export default function Post() {
  const { register, handleSubmit, setValue, watch } = useForm<FormDataType>();
  const contentValue = watch('content');

  const customSubmitHandler = (data: FormDataType) => {
    alert(JSON.stringify(data));
  }

  return (
    <section className={style.postSection}>
      <form
        className={style.editorContainer}
        onSubmit={handleSubmit(customSubmitHandler)}
      >
        <input
          className={style.contentTitle}
          placeholder="제목을 입력해주세요."
          {...register('title')}
        />
        <MDEditor
          className={style.editorBox}
          height={600}
          value={contentValue}
          onChange={(value) => typeof(value) === 'string' && setValue('content', value)}
          textareaProps={{
            placeholder: '내용을 작성해주세요.',
            // 호환성 문제 발생 MDEditor은 textAreaElement이고 hook form은 inputElement임
          }}
        />
        <button
          className={style.postBtn}
        >등록하기</button>
       {/* <MDEditor.Markdown source={mdText} style={{ padding: 10 }}/> */}
      </form>
    </section>
  );
}