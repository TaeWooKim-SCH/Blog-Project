'use client'

import dynamic from 'next/dynamic';
import style from '../_styles/PostDetail.module.css';

const EditerMarkdown = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);

export default function MDEditorPreview({ content }: any) {
  return (
    <EditerMarkdown style={{backgroundColor: 'transparent'}} source={content} />
  );
}