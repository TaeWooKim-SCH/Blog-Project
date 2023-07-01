"use client"

import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import style from '../_styles/MdEdit.module.css';

export default function MdEdi() {
  const [mdText, setMdText] = useState<string>('텍스트를 입력해주세요.');

  const handleEditorChange = (e?: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e) {
      setMdText(e.target.value);
      console.log(mdText);
    }
  };
  // const handleEditorChange = (value?: string, event?: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   if (typeof(value) === 'string') {
  //     setMdText(value);
  //   }
  // };

  return (
    // <section className={style.container}>
      // <MDEditor
      //   className={style.editorBox}
      //   height={600}
      //   fullscreen={true}
      //   value={mdText}
      //   onChange={handleEditorChange}
      // />
    //  {/* <MDEditor.Markdown source={mdText} style={{ padding: 10 }}/> */}
    // </section>
    <section className={style.container}>
      <textarea 
        className={style.editorBox}
        onChange={handleEditorChange}
        value={mdText}
      />
      <ReactMarkdown
        className={style.previewBox}
        children={mdText}
        remarkPlugins={[remarkGfm]}
      />
    </section>
  );
}