"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import bcrypt from 'bcryptjs';
import { CgSpinner } from 'react-icons/cg';

import style from '../_styles/Post.module.css';
import CategorySelect from '../_components/CategorySelect';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

type FormDataType = {
  title: string;
  content: string;
  img: string;
  category: string;
};

export default function Post() {
  const { register, handleSubmit, setValue, watch, formState: { isSubmitting } } = useForm<FormDataType>();
  const contentValue = watch('content');

  const customSubmitHandler = async (data: FormDataType) => {
    if (!watch('title')) return alert('제목을 입력해주세요.');
    else if (watch('category') === '카테고리를 선택해주세요.') return alert('카테고리를 선택해주세요.');
    else if (!watch('content')) return alert('내용을 입력해주세요.');
    else if (!watch('img')) return alert('썸네일 이미지를 등록해주세요.');

    const password = prompt('글을 등록하려면 비밀번호를 입력해주세요.');
    if (!password) {
      return alert('패스워드를 입력해야 합니다.');
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(hashedPassword);
    try {
      const res = await fetch('http://localhost:3000/api/content/add', {
        method: 'POST',
        body: JSON.stringify({data, password: hashedPassword})
      })
      if (res.ok) {
        window.location.href = '/';
      }
      else {
        return alert('비밀번호가 틀렸습니다.');
      }
    }
    catch(error) {
      console.error(error);
    }
  }

  const imgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imgObject = e.target.files[0];
      if (imgObject instanceof Blob) {
        const reader = new FileReader();
        reader.readAsDataURL(imgObject);
        reader.onloadend = () => {
          typeof(reader.result) === 'string' && setValue('img', reader.result);
        }
      }
    }
  }
  
  if (isSubmitting) {
    return (
      <div className={style.loading}>
        <CgSpinner className={style.spinner} size="50" color="A665D1" />
      </div>
    );
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
        <CategorySelect register={register} />
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
        <div className={style.firstImgContainer}>
          <label className={style.firstImgBox}>
            <span>파일선택</span>
            <input
              className={style.firstImgInput}
              onChange={imgChangeHandler}
              type="file"
              accept="image/*"
            />
          </label>
          {
            watch('img') ? <Image src={watch('img')} width='230' height='230' alt="업체사진" /> :
            <div className={style.previewBox}>대표 이미지</div>
          }
        </div>
        <button
          className={style.postBtn}
        >등록하기</button>
      </form>
    </section>
  );
}