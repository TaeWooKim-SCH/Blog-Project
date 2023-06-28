"use client"

import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export default function MdEdi() {
  const [mdText, setMdText] = useState<string>('텍스트를 입력해주세요.');

  const handleEditorChange = (value?: string, event?: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value) {
      setMdText(value);
    }
  };

  return (
    <section>
      <MDEditor height={865} value={mdText} onChange={handleEditorChange}/>
      <MDEditor.Markdown source={mdText} style={{ padding: 10 }}/>
    </section>
  );
}