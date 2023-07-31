'use client'

import MDEditor from "@uiw/react-md-editor";

export default function MDEditorPreview({ content }: any) {
  return (
    <MDEditor.Markdown source={content} />
  );
}