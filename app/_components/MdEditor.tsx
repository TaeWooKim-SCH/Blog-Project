"use client"

import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjsToHtml from 'draftjs-to-html';
import style from '../_styles/MdEditor.module.css';

export default function MdEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState('');

  const updateTextDescription = async (state: any) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlString(html);
  }

  const uploadCallback = () => {
    console.log("이미지 업로드");
  }

  return (
    <>
      <div>draft</div>
      <div className={style.container}>
        <Editor
          editorClassName={style.editor}
          placeholder='게시글을 작성해주세요.'
          editorState={editorState}
          onEditorStateChange={updateTextDescription}
          toolbar={{image: {uploadCallback: uploadCallback}}}
          localization={{locale: 'ko'}}
          editorStyle={{
            width: '100%',
            height: '400px',
            border: '3px solid gray',
            padding: '20px',
          }}
        />
      </div>
      <div className={style.rowBox}>
        <div className={style.viewer} dangerouslySetInnerHTML={{ __html: htmlString }} />
        <div className={style.viewer}>{htmlString}</div>
      </div>
    </>
  );
}